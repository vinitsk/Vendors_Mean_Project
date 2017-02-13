var mongoose=require('mongoose');

var Hotel=mongoose.model('Product');
var path=require('path');
module.exports.nodecontroller=function(req,res){
    
    res.sendFile(path.join(__dirname,'..','/views','/main.html'));
    
 /*   Hotel
          .create(
            {
              name:'Hilton'
            }
    
    ,function(err,doc){
        res 
           .json(doc);
        
        console.log(doc);
        
        
    })*/
    
    
   
    
}
