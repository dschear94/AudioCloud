class Follow < ApplicationRecord

    belongs_to :user

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: "User"
    
end
