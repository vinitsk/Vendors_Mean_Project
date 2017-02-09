angular.module('myapp').factory('authFactory',authFactory);


function authFactory(){
    
    return{
        auth:auth
    }
    
    
   var auth={
       isLoggedIn:false
   };
    
    
}