const mongoose=require('mongoose');
const RegistationSchema=new mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    email : {
        type : String,
        required :true,
        unique: true
    },
    mobile : {
        type : String,
        required :true
    },
    address : {
        type : String,
        required :true
    },
    password : {
        type : String,
        required :true

    },
    confirm_password :{
        type : String,
        required :true
    }
    
     
    
    
});

const Registation=mongoose.model('Registation',RegistationSchema);
module.exports=Registation;