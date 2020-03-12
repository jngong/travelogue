import React, { Component } from 'react'

import { getPlaceById, createEntry, getPlaces } from '../../services/apiHelper'
import EntryForm from './EntryForm'
import '../../styles/entryform.css'

class CreateEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            places: [],
            selectedPlaceId: '',
            selectedPlace: {},
            entryFormData: {
                visit_date: '',
                rating: '',
                comments: '',
                private: false,
                place_id: '',
                img_url: ''
            },
            entryCreated: false,
            createdEntry: {},
            createdEntryId: '',
            placeSelectError: false
        }
    }

    async componentDidMount() {
        const places = await getPlaces()
        this.setState({
            places: places
        })
    }

    /* ********************************** */
    /* ENTRY FORM FUNCTIONS */
    /* ********************************** */
    handleEntryChange = (e) => {
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

    handleEntrySubmit = async (e) => {
        e.preventDefault()
        const { entryFormData } = this.state
        const { user_id } = this.props.match.params

        let response = await createEntry(user_id, entryFormData)
            .catch(console.error)
        this.setState({
            entryCreated: true,
            createEntry: response,
            createdEntryId: response.id
        })
        this.props.history.push(`/users/${user_id}/entries/${this.state.createdEntryId}`)

    }

    /* ********************************** */
    /* SELECT PLACE FUNCTIONS */
    /* ********************************** */
    // This will handle the form select lists - mapping through existing data to select the values to filter or pass through.
    handlePlaceSelect = (e) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Upon clicking "confirm", the data for the selected place will be set.
    handlePlaceConfirm = () => {
        this.setState(prevstate => ({
            entryFormData: {
                ...prevstate.entryFormData,
                place_id: this.state.selectedPlaceId
            }
        }))
        if (this.state.selectedPlaceId) {
            this.setState({
                placeSelectError: false
            })
            this.getPlace()
        } else {
            this.setState({
                placeSelectError: true
            })
            // alert('Please select a place.')
        }
    }

    // If the user wants to change the place selected, this will reset state.
    cancelPlaceSelect = () => {
        this.setState({
            selectedPlaceId: null,
            entryFormData: {
                visit_date: '',
                rating: '',
                comments: '',
                private: '',
                place_id: '',
                img_url: ''
            }
        })
    }

    // Called by handlePlace confirm to set the selected Place
    getPlace = async () => {
        let place = await getPlaceById(this.state.selectedPlaceId)
        this.setState({
            selectedPlace: place
        })
    }

    /* ********************************** */
    /* ************* RENDER ************ */
    /* ********************************** */

    render() {
        const placeOptions = this.state.places.map(place => {
            return <option key={place.id} value={place.id}>{`${place.name} (${place.city}, ${place.country})`}</option>
        })

        const selectPlace = () => {
            return (
                <div className="filter-container">
                    <div>Select a place:</div>
                    <select className='select-list' name="selectedPlaceId" onChange={this.handlePlaceSelect}>
                        <option>--choose one--</option>
                        {placeOptions}
                    </select>
                    <button onClick={this.handlePlaceConfirm}>Confirm</button>
                </div>
            )
        }

        const showEntryForm = () => {
            const { name, city, country, description } = this.state.selectedPlace
            return (
                <div className='entry-form-container'>
                    <div className='selected-place-details-container'>
                        <div className='selected-place-details'>
                            <h4>Selected Place</h4>
                            <p>{name}</p>
                            <h4>Location</h4>
                            <p>{city}, {country}</p>
                            <h4>Description</h4>
                            <p>{description}</p>
                            <button onClick={this.cancelPlaceSelect} className='link-button'>
                                Select a New Place
                        </button>
                        </div>
                    </div>


                    <div className='create-entry-container'>
                        <h2>Add Your Entry</h2>
                        <EntryForm
                            entryFormData={this.state.entryFormData}
                            handleChange={this.handleEntryChange}
                            handleSubmit={this.handleEntrySubmit}
                        />
                    </div>
                </div>
            )
        }

        const showError = () => {
            return (
                <div style={{ textAlign: "center" }}>
                    ERROR: Please selecta place to continue.
                </div>
            )
        }

        return (
            <div className='create-entry'>
                <h1>Log a new entry</h1>
                {this.state.entryFormData.place_id ? showEntryForm() : selectPlace()}
                {this.state.placeSelectError ? showError() : null}
            </div>
        )
    }
}

export default CreateEntry

// If there's time, add a filter for Country by creating an options list based on the countries in places.