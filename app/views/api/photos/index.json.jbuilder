json.array! @photos do |photo|
    json.extract! photo, :id, :name
    json.photoUrl url_for(photo.photo)
end