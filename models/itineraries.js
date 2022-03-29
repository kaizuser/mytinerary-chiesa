const mongoose = require('mongoose')

const itinerariesSchema = new mongoose.Schema({
    name:{type:String, required:true},
    city:{type:mongoose.Types.ObjectId, ref:'cities', required:true},
    person_name:{type:String, required:true},
    photo:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:Number, required:true},
    likes:{type:Array, required:true},
    hashtags:{type:Array, required:true},
    autor:{type:mongoose.Types.ObjectId, ref:'users'},
    comments:[{
	    comment:{type:String},
	    userID:{type:mongoose.Types.ObjectId, ref:'users'}
    }]
})

const Itineraries = mongoose.model('itineraries', itinerariesSchema)

module.exports = Itineraries
