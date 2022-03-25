import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer.js'
import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducer.js'
import usersReducer from './usersReducer.js'
import activitiesReducer from './activitiesReducer.js'

const mainReducer = combineReducers({
    citiesReducer,
    authReducer,
    itinerariesReducer,
    usersReducer,
    activitiesReducer
})

export default mainReducer
