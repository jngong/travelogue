class ApplicationController < ActionController::API
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

    def encode(payload, expiration=24.hours.from_now)
        payload[:exp] = expiration.to_i
        JWT.encode(payload, SECRET_KEY)
    end

    def decode(token)
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end

    # This is the method that will be called upon any user request to a restricted page to authorize that user's access. 
    # It takes the Authorization header sent with the request to extract the JWT, decodes the payload to find the user id. If the decode doesn't work, then it will throw errors. 

    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
          @decoded = decode(header)
          @current_user = User.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
          render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
          render json: { errors: e.message }, status: :unauthorized
        end
    end

    def fallback_index_html
      render :file => 'public/index.html'
    end

end
