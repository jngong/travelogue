import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';

import { loginUser, createUser, verifyUser } from '../../services/apiHelper'

import Header from './Header'
import Footer from './Footer'
import PlaceList from '../publicroutes/PlaceList'
import PlaceDetails from '../publicroutes/PlaceDetails';
import UserEntriesList from '../userroutes/UserEntriesList';
import UserEntryDetails from '../userroutes/UserEntryDetails';
import CreateEntry from '../userroutes/CreateEntry';
import EditEntry from '../userroutes/EditEntry';
import UserModal from '../publicroutes/UserModal';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            authFormData: {
                first_name: '',
                username: '',
                email: '',
                password: ''
            },
            modalStatus: false,
            isCreateForm: false
        }
    }

    async componentDidMount() {
        const currentUser = await verifyUser();
        if (currentUser) {
            this.setState({
                currentUser: currentUser
            })
        }
    }

    /* ******************************************
    * ***** Modal Methods - Show and Hide ***** *
    ******************************************* */

    handleShowCreateModal = () => {
        this.setState({
            modalStatus: true,
            isCreateForm: true
        })
    }

    handleShowLoginModal = () => {
        this.setState({
            modalStatus: true,
            isCreateForm: false
        })
    }

    hideModal = () => {
        this.setState({
            modalStatus: false
        })
    }

    /* ******************************************
    * Auth Methods - Login, Create User, Verify *
    ******************************************* */

    handleLoginClick = async (e) => {
        e.preventDefault()
        const currentUser = await loginUser(this.state.authFormData)
        this.setState({
            currentUser: currentUser
        })
        if (currentUser) {
            this.props.history.push(`/users/${currentUser.id}/entries`)
            this.setState({
                modalStatus: false,
                authFormData: {
                    first_name: '',
                    username: '',
                    email: '',
                    password: ''
                }
            })
        } else {
            alert('something is wrong')
        }
    }

    handleCreateUser = async (e) => {
        e.preventDefault()
        const currentUser = await createUser(this.state.authFormData)
        this.setState({
            currentUser: currentUser
        })
        if (currentUser) {
            this.props.history.push(`/users/${currentUser.id}/entries/create`)
            this.setState({
                modalStatus: false,
                authFormData: {
                    first_name: '',
                    username: '',
                    email: '',
                    password: ''
                }
            })
        } else {
            alert('something is wrong')
        }
    }

    handleChangeAuthForm = (e) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            authFormData: {
                ...prevState.authFormData,
                [name]: value
            }
        }))
    }

    handleLogOutClick = () => {
        localStorage.removeItem('authToken');
        this.setState({
            currentUser: null
        })
        this.props.history.push('/')
    }

    /* ******************************************
    * Render - routes *
    ******************************************* */

    render() {
        return (
            <div className="layout">
                <Header
                    handleShowCreateModal={this.handleShowCreateModal}
                    handleShowLoginModal={this.handleShowLoginModal}
                    handleLogOutClick={this.handleLogOutClick}
                    currentUser={this.state.currentUser}
                />
                <UserModal
                    modalStatus={this.state.modalStatus}
                    isCreateForm={this.state.isCreateForm}
                    hideModal={this.hideModal}
                    currentUser={this.state.currentUser}
                    authFormData={this.state.authFormData}
                    handleLoginClick={this.handleLoginClick}
                    handleCreateUser={this.handleCreateUser}
                    handleChangeAuthForm={this.handleChangeAuthForm}
                />
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={props => <PlaceList {...props} />}
                    />
                    <Route
                        exact
                        path='/places'
                        render={props => <PlaceList {...props} />}
                    />
                    <Route
                        exact
                        path='/places/:place_id'
                        render={props => <PlaceDetails {...props} />}
                    />
                    <Route
                        exact
                        path='/users/:user_id/entries'
                        render={props => <UserEntriesList {...props} currentUser={this.state.currentUser} />}
                    />
                    <Route
                        exact
                        path='/users/:user_id/entries/create'
                        render={props => <CreateEntry {...props} currentUser={this.state.currentUser} />}
                    />
                    <Route
                        exact
                        path='/users/:user_id/entries/:entry_id'
                        render={props => <UserEntryDetails {...props} currentUser={this.state.currentUser} />}
                    />
                    <Route
                        exact
                        path='/users/:user_id/entries/:entry_id/edit'
                        render={props => <EditEntry {...props} currentUser={this.state.currentUser} />}
                    />
                </Switch>
                <Footer />
            </div>
        )
    }

}

export default withRouter(Layout)