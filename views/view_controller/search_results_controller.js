angular.module('myapp').controller('SearchResultController',SearchResultController);



var SearchResultController=function($http,$window,$routeParams,$rootScope){


   var vm=this;



   var searched={ 
      searchValue:$routeParams.values
   };



   console.log("The values were"+searched.searchValue);
   $http.post('/search/',searched).then(function(response){
      console.log("View Value");
      console.log(JSON.stringify(response.data,4,0,null));
      vm.searchProducts=response.data;
   });









}