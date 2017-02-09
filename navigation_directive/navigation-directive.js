angular.module('myapp').directive('barNavigation',barNavigation);


function barNavigation(){
    return {
        
        restrict:'E',
    
        templateUrl:'/navigation_directive/navigation-directive.html'
        
    }
    
}