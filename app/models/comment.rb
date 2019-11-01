class Comment < ApplicationRecord

    belongs_to :track

    belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

    def convert_time
        self.created_at.to_f
    end

    
end
