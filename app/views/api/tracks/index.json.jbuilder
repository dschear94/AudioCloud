@tracks.each do |track|
        json.set! track.id do
                json.extract! track, :title, :id
                json.artist track.artist.username
                if track.artist.avatar.attached?
                        json.artistAvatar url_for(track.artist.avatar)
                else
                        json.avatar url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg")
                end
                json.trackUrl url_for(track.audio_file)
                if track.image_file.attached?
                        json.photoUrl url_for(track.image_file)
                else
                        json.photoUrl "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg"
                end
                json.created_at track.convert_time
                json.comments do
                        json.array! track.comments
                end
        end
end