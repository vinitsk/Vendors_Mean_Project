angular.module('myapp').controller('SearchResultController',SearchResultController);



var SearchResultController=function($http,$window,$routeParams){
 /*   var vm=this;
    console.log("Values"+$routeParams.values);
  
    var keyword=$routeParams.values;
   vm.searchProducts=keyword ;   */
      var vm=this;
   //   var searchValue=$routeParams.values;
    
var searchValue=
        {
            search:$routeParams.values
        };    
    
    console.log("The values were"+searchValue);
      $http.post('/search',searchValue).then(function(result){
         vm.searchProducts=result.data;
            console.log(result);
           
         
            
            
        });
    
  
    
    

    
    
    
    
}