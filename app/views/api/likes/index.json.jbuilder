json.byTrackId do
    @likes.each do |like|
        json.set! like.track_id do 
                json.extract! like, :id, :user_id, :track_id
        end
    end
end