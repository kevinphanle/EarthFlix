class Api::UsersController < ApplicationController

    def create
        errors = [];
        errors.push('email') if params[:user][:email] === ""
        errors.push('password') if params[:user][:password] === "" 

        if errors.empty?
            @user = User.new(user_params)

            if @user.save
                login(@user)
                
                render :show
            else
                render json: ['signup'], status: 401
            end
        else
            render json: errors, status: 401
        end
    end 

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
