import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link className='logo' to='/'>Travelogue</Link>
            <Nav
                handleShowCreateModal={props.handleShowCreateModal}
                handleShowLoginModal={props.handleShowLoginModal}
                handleLogOutClick={props.handleLogOutClick}
                currentUser={props.currentUser}
            />
        </header>
    )
}
export default Header