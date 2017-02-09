angular.module('myapp').controller('logincontroller',logincontroller);


function logincontroller ($http,authFactory,$window,jwtHelper){
    var vm=this;

    vm.isLoggedIn=function()
    {
        if(authFactory.isLoggedIn){
            return true;
            
        }
        else{
            return false;
        }
        
    }
    
    
    vm.login=function(){
        var user={
            username:vm.username,
            password:vm.password
        };
        console.log(user);
        if(!vm.username||!vm.password)
            {
                vm.error="Please add a user name and password";
            }else {
               
                    $http.post('/loginuser',user).then(function(response){
                        
                      
                        $window.sessionStorage.setItem('token',response.data.token);
                        var tokend=$window.sessionStorage.token;
                       
                        var decodedToken=jwtHelper.decodeToken(tokend);
                        var userName=decodedToken.username;
                        
                        authFactory.isLoggedIn=true;
                        vm.loggedInUser=userName;
                        
                        
                                                
                    })
                }
            }
    
    
    
    
    vm.logout=function(){
        console.log('This is vinit');
    console.log(vm);
        authFactory.isLoggedIn=false;
        console.log(vm.loggedIn);
        delete $window.sessionStorage.token;
     console.log("The logout"+vm.isLoggedIn());
        
        
        
    }
    
}

    

    
