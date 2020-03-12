import React from 'react';

const EntryForm = (props) => {
    return (
        <form className='entry-form' onSubmit={props.handleSubmit}>
            <div className='form-row'>
                <label>Date Visited</label>
                <input
                    type="date"
                    name="visit_date"
                    value={props.entryFormData.visit_date}
                    onChange={props.handleChange}
                />
            </div>

            <div className='form-row non-flex'>
                <label>Rating</label>
                <select name="rating" onChange={props.handleChange} value={props.entryFormData.rating}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className='form-row non-flex'>
                <label>Keep Private? </label>
                <input
                    type="checkbox"
                    name="private"
                    checked={props.entryFormData.private}
                    onChange={props.handleChange}
                />

            </div>

            <div className='form-row'>
                <label>Comments</label>
                <textarea
                    id="comments"
                    type="text"
                    name="comments"
                    value={props.entryFormData.comments}
                    onChange={props.handleChange}
                />
            </div>

            <div className='form-row'>
                <label>Image URL</label>
                <input
                    type="url"
                    name="img_url"
                    value={props.entryFormData.img_url}
                    onChange={props.handleChange}
                />
            </div>
            <button className='submit-button'>Log It</button>
        </form>
    )
}

export default EntryForm

//! Image URL is not being updated as it needs to remain an uncontrolled field for validation upon submit. Will address later when Create functionality is built out also.
// * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
// * https://goshakkk.name/submit-time-validation-react/
// * https://reactjs.org/docs/uncontrolled-components.html