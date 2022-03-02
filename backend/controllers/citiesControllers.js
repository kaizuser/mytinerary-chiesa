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

	set_city: async(req, res) => {
		console.log(req.body)

		const {city, country, src} = req.body.dataInput

		new Cities({
			name:city,
			country:country,
			src:src,
		}).save()

			.then((answer) => res.json({answer}))
	},

	delete_city: async(req, res) => {
		const id = req.params.id

		console.log(req.params)

		await Cities.findOneAndDelete({_id:id})
	}

}

module.exports = ciudadesControllers
