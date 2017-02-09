var mongoose=require('mongoose');


var HotelSchema=new mongoose.Schema({
name :{
    type:String
    }});



mongoose.model('Hotel',HotelSchema);