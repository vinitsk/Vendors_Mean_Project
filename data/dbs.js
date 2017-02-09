var mongoose=require('mongoose');
var db_url='mongodb://localhost:27017/Mean_Project';

mongoose.connect(db_url);

mongoose.connection.on('connected',function(){
    console.log('Connected to mongodb server');
})



require('./Hotel-Schema.js');
require('./user.model.js');