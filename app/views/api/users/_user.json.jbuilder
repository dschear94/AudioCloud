json.extract! user, :id, :username, :email
json.tracks user.tracks do |track|
    json.set! track.id do 
        track
    end
end
