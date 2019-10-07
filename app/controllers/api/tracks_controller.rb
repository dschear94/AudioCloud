class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
        render :index
    end

    def create
        track = Track.new(track_params)
        if track.save
            render :index
        else
            render ["Upload failed."]
        end
    end

    private

    def track_params
        params.require(:track).permit(:title)
    end
end