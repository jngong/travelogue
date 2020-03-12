import React from 'react'

const LoginForm = (props) => {
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form className='user-modal-form' onSubmit={props.handleLoginClick}>
                <label>Username: </label>
                <input
                    type='text'
                    name='username'
                    value={props.authFormData.username}
                    onChange={props.handleChangeAuthForm}
                />
                <label>Password: </label>
                <input
                    type='password'
                    name='password'
                    value={props.authFormData.password}
                    onChange={props.handleChangeAuthForm}
                />
                <button>Login</button>
            </form>

        </div>
    )
}

export default LoginForm