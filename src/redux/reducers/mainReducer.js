import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer.js'
import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducer.js'

const mainReducer = combineReducers({
    citiesReducer,
    authReducer,
    itinerariesReducer
})

export default mainReducer
