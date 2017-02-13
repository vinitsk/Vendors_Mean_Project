var express=require('express');
var router=express.Router();
var nodecontroller=require('./nodecontroller.js');
var controllerUser=require('./users_controller.js');
var searchController=require('./search_controller.js')

router
      .route('/hotel')
      .post(nodecontroller.nodecontroller)

//Authentication for User
router
      .route('/user/register')
      .post(controllerUser.register);

router
     .route('/loginuser')
     .post(controllerUser.login);

router 
     .route('/search')
     .post(searchController.search);

module.exports=router;
    