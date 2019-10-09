json.array! @tracks do |track|
        json.extract! track, :id, :title, :artist_id
        json.trackUrl url_for(track.audio_file)
        if track.image_file.attached?
                json.photoUrl url_for(track.image_file)
        end
end