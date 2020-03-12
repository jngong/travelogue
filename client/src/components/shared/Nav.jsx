import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    if (!props.currentUser) {
        return (
            <nav>
                <div className='nav-link' onClick={props.handleShowCreateModal} alt='create account'>
                    <i className="fas fa-user-plus" alt='create account'></i>
                </div>
                <div className='nav-link' onClick={props.handleShowLoginModal} alt='login'>
                    <i className="fas fa-sign-in-alt" ></i>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div >
                    <Link to={`/users/${props.currentUser.id}/entries`} className='nav-link'>
                        <i className="fas fa-passport"></i>
                    </Link>
                </div>
                <div >
                    <Link to={`/users/${props.currentUser.id}/entries/create`} className='nav-link'>
                        <i className="fas fa-plus-square"></i>
                    </Link>
                </div>
                <div className='nav-link' onClick={props.handleLogOutClick}>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </nav>
        )
    }
}
export default Nav