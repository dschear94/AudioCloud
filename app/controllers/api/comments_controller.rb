class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            @comments = Comment.includes(:track, :author).where(track_id: params[:comment][:track_id])
            render :index
        else
            render json: @comment.errors.full_messages
        end
        
    end

    def index
        @comments = Comment.includes(:track, :author).where(track_id: params[:comment][:track_id])
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        @comments = Comment.where(track_id: @comment.track_id)
        render :index
    end

    
    private

    def comment_params
        params.require(:comment).permit(:author_id, :track_id, :body)
    end

end