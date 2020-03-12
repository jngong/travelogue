import React from 'react'
import { Link } from 'react-router-dom'

const EntryCard = (props) => {

    const { place, id, user_id } = props.entry

    const background = {
        backgroundImage: `url("${place.img_url}")`
    }

    return (
        <Link to={`/users/${user_id}/entries/${id}`}>
            <div className="place-card" style={background}>
                <div className="card-info">
                    <div className="card-title">{place.name}</div>
                    <div className="card-location">{place.city}, {place.country}</div>
                </div>
            </div>
        </Link>
    )
}

export default EntryCard