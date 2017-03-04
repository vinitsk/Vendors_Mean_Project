angular.module('myapp').controller('registercontroller',register_controller);


var register_controller=function($http){
    var vm=this;
    vm.register=function(){
        var user={
            username:vm.username,
            password:vm.password,
        };

        if(!vm.username||!vm.password)
        {
            vm.error="Please add a user name and password";
        }else {
            if(vm.password!=vm.passwordRepeat){
                vm.error="Please make sure the password match";
            }else{
                $http.post('/user/register',user).then(function(result){
                    vm.message="Registeration Successful";
                })
            }
        }

    }


};