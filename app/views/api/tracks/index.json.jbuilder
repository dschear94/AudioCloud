json.array! @tracks do |track|
        json.extract! track, :id, :title
        json.trackUrl url_for(track.audio_file)
end