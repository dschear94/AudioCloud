@artists.each do |artist|
    json.set! artist.username do 
        json.partial! "api/users/user", user: artist
    end
end