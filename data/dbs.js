var mongoose=require('mongoose');
var db_url='mongodb://localhost:27017/vendors';

mongoose.connect(db_url);

mongoose.connection.on('connected',function(){
    console.log('Connected to mongodb server');
})



require('./product_schema.js');
require('./user.model.js');