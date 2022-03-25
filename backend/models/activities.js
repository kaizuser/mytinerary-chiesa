const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    itinerary:{type:mongoose.Types.ObjectId, ref:'itineraries', required:true},
    name:{type:String, required:true},
    photo:{type:String, required:true},
})

const Activities = mongoose.model('activities', activitiesSchema)

module.exports = Activities
