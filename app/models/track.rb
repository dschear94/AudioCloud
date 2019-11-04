class Track < ApplicationRecord
    has_one_attached :audio_file
    has_one_attached :image_file

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: "User"

    has_many :comments
    has_many :likes

    def convert_time
        self.created_at.to_f
    end
    
end
