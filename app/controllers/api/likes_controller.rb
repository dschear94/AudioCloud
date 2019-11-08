class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)

        if @like.save
            @user = User.includes(
                :liked_tracks, 
                :given_follows, 
                tracks: {
                    audio_file_attachment: :blob, 
                    image_file_attachment: :blob
                }).find(@like.user_id)

            render "api/users/show"

        else

            render ["like did not persist"]

        end
        
    end

    def pseudo_destroy
        @like = Like.find_by(track_id: params[:like][:track_id], user_id: params[:like][:user_id])

        if @like.destroy

            @user = User.includes(
                :liked_tracks, 
                :given_follows, 
                tracks: {
                    audio_file_attachment: :blob, 
                    image_file_attachment: :blob
                }).find(@like.user_id)

            render "api/users/show"

        else

            render ["deleting like did not persist"]

        end

    end


    # def destroy
    #     @like = Like.find(params[:id])


    #     debugger
    #     # @like.destroy
    #     # @likes = Like.where(user_id: @like.user_id)
    #     # render :index

    #     if @like.destroy

    #         @user = User.includes(
    #             :liked_tracks, 
    #             :given_follows, 
    #             tracks: {
    #                 audio_file_attachment: :blob, 
    #                 image_file_attachment: :blob
    #             }).find(@like.user_id)

    #         render "api/users/show"

    #     else

    #         render ["deleting like did not persist"]

    #     end

    # end

    def index
    end

    
    private

    def like_params
        params.require(:like).permit(:user_id, :track_id)
    end

end