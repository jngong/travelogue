import React from 'react'
import '../../styles/modal.css'
import NewUserForm from './NewUserForm'
import LoginForm from './LoginForm'

const UserModal = (props) => {

    if (!props.modalStatus) {
        return null
    }

    return (
        <div className='user-modal'>
            <div className="close-button" onClick={props.hideModal}>X</div>
            <div>
                {props.isCreateForm ?
                    <NewUserForm
                        currentUser={props.currentUser}
                        authFormData={props.authFormData}
                        handleCreateUser={props.handleCreateUser}
                        handleChangeAuthForm={props.handleChangeAuthForm}
                    /> :
                    <LoginForm
                        currentUser={props.currentUser}
                        authFormData={props.authFormData}
                        handleLoginClick={props.handleLoginClick}
                        handleChangeAuthForm={props.handleChangeAuthForm}
                    />
                }

            </div>
        </div>
    )

}

export default UserModal

// Modal Tutorial:  https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6