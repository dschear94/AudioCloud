class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)

        if @like.save
            debugger
            @likes = Like.where(user_id: @like.user_id)
            render :index
        else
            render json: @like.errors.full_messages
        end
        
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        @likes = Like.where(user_id: @like.user_id)
        render :index
    end

    def index
    end

    
    private

    def like_params
        params.require(:like).permit(:user_id, :track_id)
    end

end