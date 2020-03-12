class Api::UsersController < ApplicationController
  before_action :authorize_request, except: [:create, :index]
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user, include: :entries, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @user.authenticate(params[:password])
      token = encode(user_id: @user.id, username: @user.username)
      render json: {user: @user, token: token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    render json: { status: 204 }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through. 3/6 changed :password_digest to :password for permit because user will enter a password which has_secure_password will convert into a pw digest
    def user_params
      params.require(:user).permit(:first_name, :username, :email, :password)
    end
end
