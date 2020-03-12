class QueryController < ApplicationController

    def places
        @places = Place.where(country_iso2: params[:country] )

        render json: @places, include: :entries, status: :ok
    end

    def countries
        ISO3166.configure do |config|
            config.locales = [:en]
        end
        
        @countries = []
        ISO3166::Country.all.each do |country| 
            @countries.push({country_iso2: country.alpha2, country: country.name, region: country.region, country_code: country.country_code})
        end

        render json: @countries, status: :ok
    end

end