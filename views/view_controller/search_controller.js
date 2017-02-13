angular.module('myapp').controller('SearchController',SearchController);



var SearchController=function($http,$window){
    var vm=this;
   
    
    
    
    
     vm.search=search;
    
     function search(){
         
      /*   var searchValue=
        {
            search:vm.searchValue
        };
         console.log(searchValue);
        $http.post('/search',searchValue).then(function(result){
         vm.searchResult=result.data;
            
           
         
            
            
        });
    
         
           
        $window.location.assign("#!/searchresult/"+vm.searchResult);*/
         var searchValue=vm.searchValue;
        
         $window.location.assign("#!/searchresult/"+searchValue);
         
    }
    
    
    
    
    
}