class RecentPlay < ApplicationRecord
    validates :track_id, uniqueness: { scope: :user_id }
    
    belongs_to :track
    belongs_to :user

    def convert_time
        self.created_at.to_f
    end
    
end
