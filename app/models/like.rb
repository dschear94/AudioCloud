class Like < ApplicationRecord
    validates :track_id, uniqueness: { scope: :user_id }
    
    belongs_to :track
    belongs_to :user
    
end
