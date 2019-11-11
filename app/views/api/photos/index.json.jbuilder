json.array! @photos do |photo|
    json.extract! photo, :id, :name
    json.photoUrl photo.photo.service_url
end