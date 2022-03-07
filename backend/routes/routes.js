const Router = require('express').Router()

const citiesControllers = require('../controllers/citiesControllers')

const {get_cities, get_city, set_city, delete_city, modify_city} = citiesControllers

Router.route('/cities')
.get(get_cities)
.post(set_city)

Router.route('/cities/:id')
.delete(delete_city)
.put(modify_city)
.get(get_city)

module.exports = Router

