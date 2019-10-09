class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
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
        params.require(:track).permit(:title, :album, :artist_id, :audio_file, :image_file)
    end
end