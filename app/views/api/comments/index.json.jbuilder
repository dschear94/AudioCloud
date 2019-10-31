@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :author_id, :track_id, :body
    end
end