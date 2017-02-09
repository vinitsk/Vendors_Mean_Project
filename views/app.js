angular.module('myapp',['ngRoute','angular-jwt']).config(config).run(run);


function config($httpProvider,$routeProvider){
    $httpProvider.interceptors.push('authInterceptor');
    
    $routeProvider.when('/profile',{
        templateUrl:'/profile.html',
        
        controllerAs:'vm',
        
        access:{
            restricted:true
        }
       }).when('/register',{
        templateUrl:'/register.html',
        controller:register_controller,
        controllerAs:'vm',
         access:{
            restricted:false
        }
    }).when('/main',{
        templateUrl:'/main.html',
        controllerAs:'vm',
         access:{
            restricted:false
        }
        
    }).otherwise({
        redirectTo:'/',
        access:{
            restricted:false
        }
        
    })

};
    
    
    
function run($rootScope,$location,$window,authFactory){
        $rootScope.$on('$routeChangeStart',function(event,nextRoute,currentRoute){
            if(nextRoute.access.restricted&&!$window.sessionStorage.token&&!authFactory.isLoggedIn)
                {
                    event.preventDefault();
                    $location.path('/');
                }
            
            
        })
        
    }
    
    
    
