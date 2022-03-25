const Activities = require('../models/activities.js')

const activitiesControllers = {
	get_activities: async(req, res) => {
		let activities
		let error = null
		
		try{
			activities = await Activities.find()
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {activities},
			success:error ? false : true,
			error:error
		})
	},

	get_activity: async(req, res) => {
		const id = req.params.id
		
		let activity
		let error = null

		try{
		    activity = await Activities.findOne({_id:id})
		    console.log(activity)
		}catch(err){
		    error = err
		    console.log(error)
		}
		res.json({
		    response: error ? 'ERROR' : activity, 
		    success: error ? false : true,
		    error: error
		})
	},

	set_activity: async(req, res) => {
		const {itinerary, name, photo} = req.body.dataInput

		new Activities({
			itinerary:itinerary,
			name:name,
			photo:photo,
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_activity: async(req, res) => {
		const id = req.params.id

		await Activities.findOneAndDelete({_id:id})
	},

	modify_activity: async(req, res) => {
	        const id = req.params.id
	        const activity = req.body.dataInput

		let modified_activity = await Activities.findOneAndUpdate({_id:id}, activity) 
		.then((res) => res.json({res}))

	}

}

module.exports = activitiesControllers
