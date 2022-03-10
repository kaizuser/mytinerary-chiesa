const Itineraries = require('../models/itineraries.js')

const itinerariesControllers = {
	get_itineraries: async(req, res) => {
		let itineraries
		let error = null
		
		try{
			itineraries = await Itineraries.find()
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {itineraries},
			success:error ? false : true,
			error:error
		})
	},

	get_itinerary: async(req, res) => {
		const id = req.params.id
		
		let itinerary
		let error = null

		try{
		    itinerary = await Itineraries.findOne({_id:id})
		    console.log(itinerary)
		}catch(err){
		    error = err
		    console.log(error)
		}
		res.json({
		    response: error ? 'ERROR' : itinerary, 
		    success: error ? false : true,
		    error: error
		})
	},

	set_itinerary: async(req, res) => {
		const {city, person_name, photo, price, duration, likes, hashtags,} = req.body.dataInput

		new Itineraries({
			city:city,
			person_name:person_name,
			photo:photo,
			price:price,
			duration:duration,
			likes:likes,
			hashtags:hashtags,
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_itinerary: async(req, res) => {
		const id = req.params.id

		await Itineraries.findOneAndDelete({_id:id})
	},

	modify_itinerary: async(req, res) => {
	        const id = req.params.id
	        const itinerary = req.body.dataInput

		let modified_itinerary = await Itineraries.findOneAndUpdate({_id:id}, itinerary) 
		.then((res) => res.json({res}))

	}

}

module.exports = itinerariesControllers
