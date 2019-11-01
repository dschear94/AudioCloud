class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            @comments = Comment.all
            render :index
        else
            render json: @comment.errors.full_messages
        end
        
    end

    def index
        @comments = Comment.where(track_id: params[:comment][:track_id])
    end

    
    private

    def comment_params
        params.require(:comment).permit(:author_id, :track_id, :body)
    end

end