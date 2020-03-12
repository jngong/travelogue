import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUserEntryById, getCategories, destroyEntry } from '../../services/apiHelper'
import Moment from 'react-moment';

class UserEntryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: {},
            categories: []
        }
    }

    async componentDidMount() {
        const { user_id, entry_id } = this.props.match.params
        const entry = await getUserEntryById(user_id, entry_id)
        const categories = await getCategories()
        this.setState({
            entry: entry,
            categories: categories
        })
    }

    async deleteEntry(user_id, entry_id) {
        await destroyEntry(user_id, entry_id)
        this.props.history.push(`/users/${user_id}/entries`)
    }

    render() {
        if (!this.state.entry && !this.props.currentUser) {
            return (<div>Loading...</div>)
        }

        const { place, comments, rating, visit_date, updated_at, img_url } = this.state.entry

        if (!place) {
            return (<div>Loading...</div>)
        }
        const categoryObject = this.state.categories.filter(category => category.id === place.category_id)
        const category = categoryObject && categoryObject[0].category_name

        return (
            <div className='entry-details-container'>
                <div className='details-header'>
                    <h1>{place.name}</h1>
                    <h3>{place.address}</h3>
                    <h3>{place.city}, {place.country}</h3>
                    <div className='entry-rating-container'>
                        <div>My Rating: {rating} out of 5</div>
                        <div>Private: {this.state.entry.private ? 'Yes' : 'No'}</div>
                    </div>
                </div>


                <div className='details-image-container'>
                    <img className='details-image' src={img_url} alt={place.name} />
                </div>

                <div className='details-description'>
                    <h4>Date Visited</h4>
                    <p><Moment format="MMMM D, YYYY">{visit_date}</Moment></p>
                    <h4>Category</h4>
                    <p>{category}</p>
                    <h4>My Comments</h4>
                    <p>{comments}</p>
                </div>

                <div className='details-footer'>
                    <p>Entry last updated: <Moment format="MM-DD-YYYY, LT">{updated_at}</Moment></p>
                    <button className='link-button'>
                        <Link
                            to={{
                                pathname: `/users/${this.props.match.params.user_id}/entries/${this.props.match.params.entry_id}/edit`,
                                state: {
                                    entry: this.state.entry
                                }
                            }}>
                            Edit Entry
                    </Link>
                    </button>
                    <button className='link-button' onClick={() => this.deleteEntry(this.props.currentUser.id, this.state.entry.id)}>
                        Delete Entry
                </button>
                    <button className='link-button'>
                        <Link to={`/users/${this.props.match.params.user_id}/entries`}>
                            Back to List
                    </Link>
                    </button>
                </div>
            </div>

        )
    }
}

export default UserEntryDetails