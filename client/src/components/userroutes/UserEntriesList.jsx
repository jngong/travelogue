import React, { Component } from 'react'
import { getUserEntries } from '../../services/apiHelper'
import EntryCard from './EntryCard'
import '../../styles/places.css';
import { Link } from 'react-router-dom'

class UserEntriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEntries: []
        }
    }

    async componentDidMount() {
        const entries = await getUserEntries(this.props.match.params.user_id)
        this.setState({
            userEntries: entries
        })
    }

    render() {

        if (!this.state.userEntries || !this.props.currentUser) {
            return (<div>Loading...</div>)
        }

        const sortedEntries = this.state.userEntries.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)

        const entries = sortedEntries.map(entry => (
            <EntryCard
                key={entry.id}
                entry={entry}
            />
        ))

        return (
            <div className='entries-container'>
                <h1>{this.props.currentUser.first_name}'s Travel Log</h1>
                <p>Your current travel log has {this.state.userEntries.length} destinations.</p>
                <div className='subhead'>Been somewhere new recently?</div>
                <Link to={`/users/${this.props.match.params.user_id}/entries/create`}>
                    <button className="link-button">
                        New entry <i className="button-icon fas fa-plus-square"></i>
                    </button>
                </Link>
                <div className='entry-list'>
                    {entries}
                </div>
            </div>
        )
    }
}

export default UserEntriesList