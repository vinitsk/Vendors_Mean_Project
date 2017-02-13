var mongoose=require('mongoose');
var Product=mongoose.model('Product'); 
var path=require('path');
//var User=mongoose.model('User');
var q=require('q');

module.exports.search=function(req,res){
    
    var search=req.body.search;
    
    console.log("I need the search value"+search);
    
    Product.
            find({title:{$regex:search,$options:"i"}}).
            exec(function(err,searchResult){
               res.json(searchResult);
              console.log(searchResult) ;    
        
    });
    
    
 
    
    
    
    
};