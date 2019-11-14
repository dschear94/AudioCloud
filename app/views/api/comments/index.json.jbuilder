@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :author_id, :track_id, :body
        json.created_at comment.convert_time
        json.author comment.author.username
        json.track comment.track.title
        if comment.author.avatar.attached?
                json.artistAvatar comment.author.avatar.service_url
        else
                json.artistAvatar url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg")
        end
    end
end