import React, { Component } from 'react'
import PlaceCard from './PlaceCard'
import { getPlacesByCountry, getCountries, getPlaces } from '../../services/apiHelper'
import '../../styles/places.css';

class PlaceList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allPlaces: [],
            countries: [],
            country: null,
            searchResults: null
        }
    }

    async componentDidMount() {
        const countries = await getCountries()
        const places = await getPlaces()
        this.setState({
            allPlaces: places,
            countries: countries
        })
    }

    handleSearchChange = (e) => {
        this.setState({
            country: e.target.value
        })
    }

    handleSearchSubmit = async (e) => {
        e.preventDefault()
        const search = await getPlacesByCountry(this.state.country)
        this.setState({
            searchResults: search
        })
    }

    render() {

        // Sorts the place list in reverse order by last update
        const sortedPlaces = this.state.allPlaces.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
        const places = () => {
            return (
                <div className='place-list'>
                    {sortedPlaces.map((place, i) => {
                        return ((i < 12) && <PlaceCard key={place.id} place={place} />)
                    })}
                </div>)
        }

        // Filter through search results to render place cards
        const results = () => {
            return (
                <div className='place-list'>
                    {this.state.searchResults && this.state.searchResults.map(place => {
                        return (place && <PlaceCard key={place.id} place={place} />)
                    })}
                </div>
            )
        }

        const noresults = () => {
            return (
                <div className='no-results'>
                    <p>No destinations have been logged in that country.</p>
                    <p>Search again or choose one of the destinations below.</p>
                    {places()}
                </div>
            )
        }

        // Sorts the country list alphabetically
        const sortedCountries = this.state.countries.sort((a, b) => (a.country > b.country) ? 1 : -1)
        const countryOptions = sortedCountries.map((country, i) => {
            return (
                <option key={i} value={country.country_iso2}>{country.country}</option>
            )
        })

        return (
            <div className="home-container">

                <div className="home-intro">
                    <h1>Welcome to Travelogue</h1>
                    <p>Travelogue helps you keep track of where you going to help others get where they're going next.</p>
                    <p>Create an account to start logging your adventures today.</p>
                    <p>Not ready to join our community? Get inspired by exploring destinations.</p>
                </div>

                <div className="filter-container">
                    <form onSubmit={this.handleSearchSubmit}>
                        <select className="select-list" name="country" onChange={this.handleSearchChange}>
                            <option>Search by country</option>
                            {countryOptions}
                        </select>
                        <input type="submit" value="Search" />
                    </form>
                </div>

                <div className="places-container">
                    <h2>{!this.state.searchResults ? "Featured Destinations" : "Search Results"}</h2>
                    <div>
                        {!this.state.searchResults ? places() :
                            this.state.searchResults.length > 0 ? results() : noresults()}
                    </div>
                </div>

            </div>
        )
    }
}

export default PlaceList

// Referenced article for sorting objects by property: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/