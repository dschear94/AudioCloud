@tracks.each do |track|
        json.set! track.id do
                json.extract! track, :title, :id, :play_count
                json.artist track.artist.username
                if track.artist.avatar.attached?
                        json.artistAvatar track.artist.avatar.service_url
                else
                        json.avatar url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg".service_url)
                end
                json.trackUrl track.audio_file.service_url
                if track.image_file.attached?
                        json.photoUrl track.image_file.service_url
                else
                        json.photoUrl url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg")
                end
                json.created_at track.convert_time
                json.numComments track.comments.length
                json.numLikes track.likes.length
        end
end