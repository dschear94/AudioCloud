json.track do
    json.partial! "api/tracks/track", track: @track
end

json.currentUser do
    json.partial! "api/users/user", user: current_user
end
