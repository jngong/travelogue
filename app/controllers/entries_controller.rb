class EntriesController < ApplicationController
  before_action :authorize_request
  before_action :set_user
  before_action :set_user_entry, only: [:show, :update, :destroy]

  # GET /entries
  def index
    @entries = @user.entries
    render json: @entries, include: :place, status: :ok
  end

  # GET /entries/1
  def show
    render json: @entry, include: :place, status: :ok
  end

  # POST /entries
  def create
    @entry = @user.entries.new(entry_params)

    if @entry.save
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entries/1
  def update
    if @entry.update(entry_params)
      render json: @entry, include: :place
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
    render json: { status: 204 }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:user_id])
    end

    def set_user_entry
      @entry = @user.entries.find_by!(id: params[:id]) if @user
      # Entry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def entry_params
      params.require(:entry).permit(:visit_date, :rating, :comments, :private, :user_id, :place_id, :img_url)
    end
end

# *Referenced RESTful JSON API with Rails lesson to modify controller: https://git.generalassemb.ly/sei-nyc-blizzard/Ruby/blob/master/lessons/RESTful-JSON-API-with-Rails.md
# Note: Removed this code: , location: @entry from line 22 as it was causing an error on returning the json confirmation