var mongoose=require('mongoose');
var request=require('request');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./data/dbs.js')(app,mongoose,request);


var path=require('path');

var routes=require('./routes');
app.set('port',200);
app.use(express.static(path.join(__dirname,'/views')));
app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));
app.use('/auth',express.static(path.join(__dirname,'/auth')));
app.use('/navigation_directive',express.static(path.join(__dirname,'/navigation_directive')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',routes);


var server=app.listen(app.get('port'),function(){
    
   console.log("The server is now running"); 
});





