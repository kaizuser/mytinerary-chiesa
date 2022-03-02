const Router = require('express').Router()

const citiesControllers = require('../controllers/citiesControllers')

const {get_cities} = citiesControllers

Router.route('/cities')
.get(get_cities)

module.exports = Router

