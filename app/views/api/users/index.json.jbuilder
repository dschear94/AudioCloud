@artists.each do |artist|
    json.partial! "api/users/user", user: artist
end