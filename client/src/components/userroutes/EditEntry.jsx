import React, { Component } from 'react'
import EntryForm from './EntryForm'
import { updateEntry } from '../../services/apiHelper'
import { Redirect, Link } from 'react-router-dom'

class EditEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUpdated: false,
            entryFormData: {
                visit_date: '',
                rating: '',
                comments: '',
                private: '',
                place_id: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            entryFormData: this.props.location.state.entry
        })
    }

    handleChange = (e) => {
        const { value, checked, name, type } = e.target

        if (type === "checkbox") {
            this.setState(prevState => ({
                entryFormData: {
                    ...prevState.entryFormData,
                    [name]: checked
                }
            }))
        } else if (name === "rating") {
            this.setState(prevState => ({
                entryFormData: {
                    ...prevState.entryFormData,
                    [name]: parseInt(value)
                }
            }))
        } else {
            this.setState(prevState => ({
                entryFormData: {
                    ...prevState.entryFormData,
                    [name]: value
                }
            }))
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { entryFormData } = this.state
        const { user_id, entry_id } = this.props.match.params

        await updateEntry(user_id, entry_id, entryFormData)
            .then(this.setState({ isUpdated: true }))
            .catch(console.error)
    }

    render() {

        const { user_id, entry_id } = this.props.match.params

        if (this.state.isUpdated) {
            return <Redirect to={`/users/${user_id}/entries/${entry_id}`} />
        }

        return (
            <div className='entry-form-container'>
                <h1>Edit Entry Details</h1>
                <div className='selected-place-details-container'>
                    <div className='edit-form-subhead'>
                        <h3>{this.props.location.state.entry.place.name}</h3>
                        <h4>{this.props.location.state.entry.place.city}</h4>
                        <h4>{this.props.location.state.entry.place.country}</h4>
                    </div>
                    <button className='cancel-button'>
                        <Link to={`/users/${user_id}/entries/${entry_id}`}>
                            Cancel
                    </Link>
                    </button>
                </div>
                <EntryForm
                    entryFormData={this.state.entryFormData}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }

}

export default EditEntry