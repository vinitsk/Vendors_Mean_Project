var mongoose=require('mongoose');

var Hotel=mongoose.model('Product');
var path=require('path');
module.exports.nodecontroller=function(req,res){
    
    res.sendFile(path.join(__dirname,'..','/views','/main.html'));

    
    
   
    
}
