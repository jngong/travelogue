import React, { Component } from 'react'
import { getPlaceById } from '../../services/apiHelper'
import { Link } from 'react-router-dom'
import '../../styles/placedetails.css'

class PlaceDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            place: {},
            category: {}
        }
    }

    async componentDidMount() {
        const place = await getPlaceById(this.props.match.params.place_id)
        this.setState({
            place: place,
            category: place.category
        })
    }

    render() {

        if (!this.state.place) {
            return (<div>Loading...</div>)
        }

        const { name, description, address, city, state, country, img_url } = this.state.place
        const { category_name } = this.state.category

        return (
            <div className='place-details-container'>
                <div className='details-header'>
                    <h1>{name}</h1>
                    <h3>{address}, {city} {state && state}</h3>
                    <h3>{country}</h3>
                </div>

                <div className='details-image-container'>
                    <img className='details-image' src={img_url} alt={name} />
                </div>

                <div className='details-description'>
                    <h4>Category</h4>
                    <p>{category_name}</p>
                    <h4>Description</h4>
                    <p>{description}</p>
                </div>

                <div className='details-footer'>
                    <button className='link-button'>
                        <Link to='/places'>Explore More Destinations</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default PlaceDetails