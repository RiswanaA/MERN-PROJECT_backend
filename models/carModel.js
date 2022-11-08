const mongoose= require('mongoose');
const CarSchema= new mongoose.Schema({
   
    name: {type: String, required: false},
    image: {type: String, required: false},
    seater: {type: Number, required: false},
    fuelType: {type: String, required: false},
    bookedTimeSlots:[
        {
            from: {type: String, required: false},
            to: {type: String, required: false}
        }
    ], 
    rentPerDay: {type: Number, required: false}

},{timestamps: false}
)

const carModel = mongoose.model("Car", CarSchema);
module.exports=carModel;



