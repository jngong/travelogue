import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const api = axios.create({
    baseURL: baseUrl
})

/* ********************************** */
/* Public Get Routes - no auth */
/* ********************************** */

export const getPlaces = async () => {
    const res = await axios.get(`${baseUrl}/places`)
    return res.data
}

export const getPlaceById = async (place_id) => {
    const res = await axios.get(`${baseUrl}/places/${place_id}`)
    return res.data
}

export const getCategories = async () => {
    const res = await axios.get(`${baseUrl}/categories`)
    return res.data
}

export const getCategoryById = async (category_id) => {
    const res = await axios.get(`${baseUrl}/categories/${category_id}`)
    return res.data
}

export const getCountries = async () => {
    const res = await axios.get(`${baseUrl}/query/countries`)
    return res.data
}

export const getPlacesByCountry = async (country) => {
    const res = await axios.get(`${baseUrl}/query?country=${country}`)
    return res.data
}

/* *************************************** */
/* CRUD Routes that require authorization */
/* ************************************** */

export const getUserEntries = async (user_id) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.get(`/users/${user_id}/entries`)
    return res.data
}

export const getUserEntryById = async (user_id, entry_id) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.get(`/users/${user_id}/entries/${entry_id}`)
    return res.data
}

export const destroyEntry = async (user_id, entry_id) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.delete(`/users/${user_id}/entries/${entry_id}`)
    return res.data
}

export const updateEntry = async (user_id, entry_id, data) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.put(`/users/${user_id}/entries/${entry_id}`, data)
    return res.data
}

export const createEntry = async (user_id, data) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.post(`/users/${user_id}/entries`, data)
    return res.data
}

export const createPlace = async (data) => {
    const token = localStorage.getItem('authToken')
    api.defaults.headers.common.Authorization = token
    const res = await api.post('/places', data)
    return res.data
}

/* **************************************** */
/* Auth Routes - login, create user, verify */
/* *************************************** */

// Axios call for creating a new user - not sure if the headers line is set up correctly. The post call doesn't send back a token?
export const createUser = async (newuserdetails) => {
    const res = await api.post(`/users`, { user: newuserdetails })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
    return res.data.user
}

// Axios call for logging in the user
export const loginUser = async (logindetails) => {
    const res = await axios.post(`${baseUrl}/auth/login`, logindetails)
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
    return res.data.user
}

// Axios call for verifying the user 
export const verifyUser = async () => {
    const token = localStorage.getItem('authToken')
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        const res = await api.get(`/auth/verify`)
        return res.data
    }
    return false
}
