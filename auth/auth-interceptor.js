angular.module('myapp').factory('authInterceptor',authInterceptor);


function authInterceptor($window,$q,$location,authFactory){

return {
    request:request,
    response:response,
    responseError:responseError
    
};

function request(config){
    config.headers=config.headers||{};
    console.log("Windows Session"+$window.sessionStorage.getItem('token'));
    if ($window.sessionStorage.token)
        {
            
            console.log("Token in header"+window.sessionStorage.token);
    config.headers.authorization='Bearer '+$window.sessionStorage.token;
        }
    
    return config;
    
}


function response(response){
    console.log("Lets see"+authFactory.isLoggedIn);
    console.log("2nd One"+$window.sessionStorage.getItem('token'));
    if($window.sessionStorage.getItem('token')&&!authFactory.isLoggedIn)
        {
            authFactory.isLoggedIn=true;
            console.log("Inside"+authFactory.isLoggedIn);
        }
    
    
    return response||$q.when(response);
}



function responseError(rejection){
    
    if (rejection.status==401||rejection.status==403){
        
        delete $window.sessionStorage.token;
        authFactory.isLoggedIn=false;
        $location.path('/')
    }
    
    
    
    
}
}
    
    