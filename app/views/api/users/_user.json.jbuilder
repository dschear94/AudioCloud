json.extract! user, :id, :username, :email
if user.avatar.attached?
        json.avatar url_for(user.avatar)
else
        json.avatar url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg")
end
if user.header_image.attached?
        json.header_image url_for(user.header_image)
else
        json.header_image url_for("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c685d92a1369dca31347b864eab8548e3d341c47/IMG_5373.jpg")
end
json.numFollowers user.followers.length
json.likedTracks do
        user.liked_tracks.each do |liked_track|
                json.set! liked_track.id do
                        json.extract! liked_track, :id, :title
                end
        end
end
json.following do
        user.followings.each do |followed_user|
                json.set! followed_user.username, followed_user.id
        end
end