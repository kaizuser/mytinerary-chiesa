const Cities = require('../models/cities')

const ciudadesControllers = {
	get_cities: async(req, res) => {
		let cities
		let error = null
		
		try{
			cities = await Cities.find()
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {cities},
			success:error ? false : true,
			error:error
		})
	},

	get_city: async(req, res) => {
		const id = req.params.id
		
		let city
		let error = null

		try{
		    city = await Cities.findOne({_id:id})
		    console.log(city)
		}catch(err){
		    error = err
		    console.log(error)
		}
		res.json({
		    response: error ? 'ERROR' : city, 
		    success: error ? false : true,
		    error: error
		})
	},

	set_city: async(req, res) => {
		const {name, country, src, description} = req.body.dataInput

		new Cities({
			name:name,
			country:country,
			src:src,
			description:description
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_city: async(req, res) => {
		const id = req.params.id

		await Cities.findOneAndDelete({_id:id})
	},

	modify_city: async(req, res) => {
	        const id = req.params.id
	        const city = req.body.dataInput

		let modified_city = await Ciudades.findOneAndUpdate({_id:id}, city) 
		.then((res) => res.json({res}))

	}

}

module.exports = ciudadesControllers
