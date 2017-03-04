
module.exports=function (app,mongoose,request){

var db_url='mongodb://localhost:27017/vendors';

mongoose.connect(db_url);

mongoose.connection.on('connected',function(){
    console.log('Connected to mongodb server');
});



require('./product_schema.js');
require('./user.model.js');
var ebayClient=require('../services/api-client/ebay.services.client.js')();
console.log("Dbs"+ebayClient);    
    
    
require('../routes/search_controller.js')(app,ebayClient);    
    
    
    
    
}