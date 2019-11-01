@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :author_id, :track_id, :body
        json.created_at comment.convert_time
        json.author comment.author.username
        json.track comment.track.title
    end
end