class Api::TracksController < ApplicationController
    def index
        @tracks = Track.with_attached_audio_file
            .with_attached_image_file
            .includes(:artist, :comments, :likes).all
        render :index
    end

    def by_artist
        @artist = User.find_by(username: params[:artist_id])
        @tracks = Track.with_attached_audio_file
            .with_attached_image_file
            .where(artist_id: @artist.id)
            .includes(:artist, :comments, :likes).all
            render :index
    end

    def by_follows
        @tracks = Track.with_attached_audio_file
            .with_attached_image_file
            .joins(:artist)
            .includes(:artist, :comments, :likes)
            .where(
                artist: User.find(params[:artist_id])
                .followings
            )

        render :index
    end

    def by_likes
        @tracks = User.find(params[:artist_id])
        .liked_tracks
        .includes(:artist, :comments, :likes)
        .with_attached_audio_file
        .with_attached_image_file

        
        render :index
    end

    def update_plays

        @track = Track.with_attached_audio_file
            .with_attached_image_file
            .joins(:artist)
            .includes(:artist, :comments, :likes)
            .find(params[:id])

        @track.update_attributes(play_count: @track.play_count += 1)
        
        if current_user
            @recent_play = RecentPlay.find_by(user_id: current_user.id, track_id: @track.id)
            if @recent_play
                @recent_play.destroy
                RecentPlay.create(user_id: current_user.id, track_id: @track.id)
                render "api/tracks/addplay"
            else
                RecentPlay.create(user_id: current_user.id, track_id: @track.id)
                render "api/tracks/addplay"
            end
        else
            render "api/tracks/show" 
        end
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