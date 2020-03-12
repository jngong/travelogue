import React from 'react'

const NewUserForm = (props) => {

    return (
        <div className='form-container'>
            <h2>Create an Account</h2>
            <form className='user-modal-form' onSubmit={props.handleCreateUser}>
                <label>First Name: </label>
                <input
                    type='text'
                    name='first_name'
                    value={props.authFormData.first_name}
                    onChange={props.handleChangeAuthForm}
                />
                <label>Username: </label>
                <input
                    type='text'
                    name='username'
                    value={props.authFormData.username}
                    onChange={props.handleChangeAuthForm}
                />
                <label>Email Address: </label>
                <input
                    type='text'
                    name='email'
                    value={props.authFormData.email}
                    onChange={props.handleChangeAuthForm}
                />
                <label>Password: </label>
                <input
                    type='password'
                    name='password'
                    value={props.authFormData.password}
                    onChange={props.handleChangeAuthForm}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default NewUserForm