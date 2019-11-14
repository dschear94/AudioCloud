class Api::UsersController < ApplicationController

    def show
        @user = User.includes(
            :liked_tracks, 
            :given_follows,
            :followings,
            # :avatar,
            # :header_image,
        tracks: {
            audio_file_attachment: :blob, 
            image_file_attachment: :blob
        }).find_by(username: params[:id])

        # @likes = Like.where(user_id: params[:id])
        # @follows = Follow.where(follower_id: params[:id])

        if @user
            render "api/users/show"
        else
            render ["no artist found"]
        end
    end

    def by_track_comments
        @artists = Track.find(params[:track_id]).commenters
        # if @artists
        #     if @artists.length > 1 
        #         render "api/users/index"
        #     else
        #         render "api/users/show"
        #     end
        # end
        # render "api/users/show"
        render :index
    end

    def by_follows
        @artists = User.find(params[:user_id]).followings
        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.includes(
            # :avatar, 
            # :header_image,
            tracks: {
            audio_file_attachment: :blob, 
            image_file_attachment: :blob
        }).find_by(username: params[:user][:username])
        @user.update!(user_params)
        render "api/users/show"
    end

    private

    def user_params
        params.require(:user).permit(
            :entryField, 
            :username, 
            :email, 
            :password, 
            :age, 
            :gender,
            :avatar,
            :header_image
        )
    end
end
