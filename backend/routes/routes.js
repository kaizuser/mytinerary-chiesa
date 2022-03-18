const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passports')

const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers.js')
const usersControllers = require('../controllers/usersControllers.js')

const {get_cities, get_city, set_city, delete_city, modify_city} = citiesControllers
const {get_itineraries, get_itinerary, set_itinerary, delete_itinerary, modify_itinerary} = itinerariesControllers
const {signUpUsers, signInUser, signOutUser,verifyEmail,verificarToken, getUsers}= usersControllers


//Cities
Router.route('/cities')
.get(get_cities)
.post(set_city)

Router.route('/cities/:id')
.delete(delete_city)
.put(modify_city)
.get(get_city)

//Itineraries
Router.route('/itineraries')
.get(get_itineraries)
.post(set_itinerary)

Router.route('/itineraries/:id')
.delete(delete_itinerary)
.put(modify_itinerary)
.get(get_itinerary)

//Users
Router.route('/auth/signUp')
.post(validator, signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)


module.exports = Router

