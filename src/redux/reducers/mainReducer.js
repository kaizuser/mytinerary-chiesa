import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer.js'
import authReducer from './authReducer'

const mainReducer = combineReducers({
    citiesReducer,
    authReducer

})

export default mainReducer
