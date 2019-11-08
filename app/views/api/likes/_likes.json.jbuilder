likes.each do |like|
    json.set! like.id do 
        json.extract! like, :id, :user_id, :track_id
    end
end
