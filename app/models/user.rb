class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token

    has_many :tracks,
    foreign_key: :artist_id

    has_many :comments,
    foreign_key: :author_id

    has_many :likes

    
    has_many :liked_tracks,
    through: :likes,
    source: :track
    
    has_many :recent_plays
    
    has_many :recently_played_tracks,
    through: :recent_plays,
    source: :track

    # array of follows for user
    has_many :received_follows,
    foreign_key: :followed_user_id,
    class_name: "Follow"

    # array of users who follow user
    has_many :followers,
    through: :received_follows,
    source: :follower

    # array of follows user gave to others
    has_many :given_follows,
    foreign_key: :follower_id,
    class_name: "Follow"

    # array of other users who user follows
    has_many :followings,
    through: :given_follows,
    source: :followed_user

    has_one_attached :avatar
    has_one_attached :header_image
    

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) || User.find_by(email: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def self.find_by_entry(entry)
        user = User.find_by(username: entry) || User.find_by(email: entry)
        return user ? user : nil
    end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt_pw = BCrypt::Password.new(self.password_digest)
    bcrypt_pw.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
end
