class Api::AuthenticationController < ApplicationController
    before_action :authorize_request, except: :login

    # This method creates a verification of the user credentials. Will be accessed via POST route /auth/login
    # The .authenticate is provided by Bcrypt/has_secure_password. It will take the user inputted pw and convert to a hash to match with the pw digest.
    # If the authentication comes back true, then the JWT encode method will create a token with the user's id and username and send it back as json.
    def login 
        
        @user = User.find_by_username(params[:username])

        if @user.authenticate(params[:password])
            token = encode(user_id: @user.id, username: @user.username)
            render json: {user: @user, token: token}, status: :ok
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end

    end

    # This will be a method accessed via GET route /auth/verify
    def verify
        render json: @current_user, status: :ok
    end

    private

    def login_params
        params.permit(:username, :password)
    end

end
