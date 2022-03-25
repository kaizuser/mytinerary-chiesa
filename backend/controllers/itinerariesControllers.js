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
		const {name, city, person_name, photo, price, duration, likes, hashtags,} = req.body.dataInput

		new Itineraries({
			name:name,
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

	},

	like_dislike: async (req,res) =>{
		const id = req.params.id
		const user = req.user.id 

		await Itineraries.findOne({_id: id})

		.then((itinerary) =>{
			if(itinerary.likes.includes(user)){
			Itineraries.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})
			.then((response)=> res.json({success:true, response:response.likes}))
			.catch((error) => console.log(error))
		} else{
			Itineraries.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})
			.then((response) => res.json({success:true, response:response.likes}))
			.catch((error) => console.log(error))
		}
		})
		.catch((error) => res.json({success:false, response:error}))
	},

}

module.exports = itinerariesControllers
