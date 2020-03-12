import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/places.css'

const PlaceCard = (props) => {

    const { name, city, country, img_url, id } = props.place

    const background = {
        backgroundImage: `url("${img_url}")`
    }

    return (
        <Link to={`/places/${id}`}>
            <div className="place-card" style={background}>
                <div className="card-info">
                    <div className="card-title">{name}</div>
                    <div className="card-location">{city}, {country}</div>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard