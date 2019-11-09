class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)
        
        if @follow.save
            @user = User.includes(
                :liked_tracks, 
                :given_follows, 
                tracks: {
                    audio_file_attachment: :blob, 
                    image_file_attachment: :blob
                }).find(@follow.follower_id)

            render "api/users/show"

        else

            render ["like did not persist"]

        end
        
    end

    # def destroy
    #     @follow = Follow.find(params[:id])
    #     @follow.destroy
    #     @follows = Follow.where(follower_id: @follow.follower_id)
    #     render :index
    # end

    def pseudo_destroy
        @follow = Follow.find_by(follower_id: params[:follow][:follower_id], followed_user_id: params[:follow][:followed_user_id])

        if @follow.destroy

            @user = User.includes(
                :liked_tracks, 
                :given_follows, 
                tracks: {
                    audio_file_attachment: :blob, 
                    image_file_attachment: :blob
                }).find(@follow.follower_id)

            render "api/users/show"

        else

            render ["deleting follow did not persist"]

        end

    end

    def index
    end

    
    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_user_id)
    end

end