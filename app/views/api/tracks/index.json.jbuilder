json.array! @tracks do |track|
    json.extract! track, :id, :name
    json.trackUrl url_for(track.audio_file)
end