json.extract! @track, :id, :title, :album, :artist_id
json.trackUrl url_for(@track.audio_file)