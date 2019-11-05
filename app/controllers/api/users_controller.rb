class Api::UsersController < ApplicationController

    def show
        @user = User.includes(tracks: {
            audio_file_attachment: :blob, 
            image_file_attachment: :blob
        }).find_by(username: params[:id])

        if @user
            render "api/users/show"
        else
            render ["no artist found"]
        end
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
        debugger
        @user = User.find(params[:id])
        @user.update!(user_params)
        render "api/users/show"
    end

    private

    def user_params
        params.require(:user)
        .permit(
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
