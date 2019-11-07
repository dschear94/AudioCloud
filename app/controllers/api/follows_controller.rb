class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            @follows = Follow.where(follower_id: @follow.follower_id)
            render :index
        else
            render json: @follow.errors.full_messages
        end
        
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        @follows = Follow.where(follower_id: @follow.follower_id)
        render :index
    end

    def index
    end

    
    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_user_id)
    end

end