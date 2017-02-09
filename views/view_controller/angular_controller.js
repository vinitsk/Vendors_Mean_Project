angular.module('myapp').controller('ang_controller',ang_controller);


var ang_controller=function($http){
    vm=this;
    $http.get('/hotel').then(function (response){
        vm.name=response.name;
    });
    
    
}