const mongoose=require('mongoose');
const sellerSchema=new mongoose.Schema({
    Name :{
        type : String,
        required :true
    },
    Email : {
        type : String,
        required :true
    },
    Mobile : {
        type : String,
        required :true
    }
});

const Seller=mongoose.model('Seller',sellerSchema);
module.exports=Seller;