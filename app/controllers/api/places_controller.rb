class Api::PlacesController < ApplicationController
  before_action :set_place, only: [:show, :update, :destroy]
  
  # GET /places
  def index
    @places = Place.all

    render json: @places, include: :category, status: :ok
  end

  # GET /places/1
  def show
    render json: @place, include: [:entries, :category], status: :ok
  end

  # POST /places
  def create
    @place = Place.new(place_params)

    if @place.save
      render json: @place, status: :created, location: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /places/1
  def update
    if @place.update(place_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # DELETE /places/1
  def destroy
    @place.destroy
    render json: { status: 204 }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def place_params
      params.require(:place).permit(:name, :description, :address, :city, :state, :country, :country_iso2, :img_url, :category_id)
    end
end
