const mongoose= require('mongoose');
const CustomerSchema= new mongoose.Schema({
   
   
    C_name:{
        type:String,
        required:true,
    },
    C_email:{
        type:String,
        required:true,
    },
    C_pwd:{
        type: String,
        required:true,

    },
    C_contact_no:{
        type: Number,
        required:true,

    }

});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports=Customer;



