angular.module('myapp').directive('searchElement',searchElement);


function searchElement(){
    
    return {
        restrict:'E',
        templateUrl:'/navigation_directive/search-directive.html',
        controller:SearchController,
        controllerAs:'vm'
    }
}