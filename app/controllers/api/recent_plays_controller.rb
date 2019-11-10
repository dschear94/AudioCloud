class Api::RecentPlaysController < ApplicationController

    def create
        
        @recent_play = RecentPlay.new(recent_play_params)

        if @recent_play.save
            @user = User.includes(
                :liked_tracks, 
                :given_follows, 
                tracks: {
                    audio_file_attachment: :blob, 
                    image_file_attachment: :blob
                }).find(@recent_play.user_id)

            render "api/users/show"

        else

            render ["recent_play did not persist"]

        end
        
    end


    
    private

    def recent_play_params
        params.require(:recent_play).permit(:user_id, :track_id)
    end

end