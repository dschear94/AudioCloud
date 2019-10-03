class Api::EntryController < ApplicationController

    def show
        @user = User.find_by_entry(params[:user][:entryField])
        
        if @user
            render "api/entry/show"
        elsif params[:user][:entryField].include?("@")
            render json: {email: params[:user][:entryField], entryField: params[:user][:entryField], found: false}
        else
            render json: ["Enter a valid email address or profile URL"], status: 401
        end
    end

end
