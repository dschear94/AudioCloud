class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)

        if @like.save
            render :index
        else
            render json: @like.errors.full_messages
        end
        
    end

    def destroy
        
    end

    def index
        debugger
        @likes = Like.
    end

    
    private

    def like_params
        params.require(:like).permit(:user_id, :track_id)
    end

end