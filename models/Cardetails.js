const mongoose= require('mongoose');
const CarSchema= new mongoose.Schema({
   
    Car_id:{

        type: Number,
        required:true,

    },

    Car_name:{
        type:String,
        required:true,
    },
    Rent_per_day:{
        type:Number,
        required:true,
    },
    Fuel_type:{
        type: String,
        required:true,

    },
    Seater:{
        type: Number,
        required:true,

    }
    

});

const Car = mongoose.model("Car", CarSchema);
module.exports=Car;



