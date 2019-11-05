class Api::TracksController < ApplicationController
    def index
        @tracks = Track.with_attached_audio_file
        .with_attached_image_file
        .preload(:artist, :comments).all
        render :index
    end

    def create
        @track = Track.new(track_params)
        
        if @track.audio_file.attached?
            if @track.save
                render :show
            else
                render ["Upload failed."]
            end
        else
            render ["kajsndvskajnvkjsndvajksnvknja"]
        end
    end

    private

    def track_params
        params.require(:track)
        .permit(
            :title, 
            :album, 
            :artist_id, 
            :audio_file, 
            :image_file
        )
    end
end