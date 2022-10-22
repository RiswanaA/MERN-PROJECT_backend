const mongoose= require('mongoose');
const UserSchema= new mongoose.Schema({
   
   
    O_name:{
        type:String,
        required:true,
    },
    O_email:{
        type:String,
        required:true,
    },
    O_pwd:{
        type: String,
        required:true,

    },
    O_contact_no:{
        type: Number,
        required:true,

    }

});

const User = mongoose.model("Owner", UserSchema);
module.exports=User;



