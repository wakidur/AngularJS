services.factory('UserService',[function(){
        return {
            isLogged : false,
            username : ''
        };
}]);

var ctrl = angular.module('myApp', []);
    ctrl.controller('loginCtrl', ['$scope', '$http', 'UserService', 
        function($scope,$http,UserService){
            $scope.login = function() {
                // configuration object 
                var config = {
                    /*..........*/
                }
                $http(config)
                    .success(function(data, status,headers, config){
                        if(data.status){
                            // successfull login
                            User.isLogged = true;
                            User.username = data.username;
                        } else {
                            User.isLogged = false;
                            User.username = '';
                        }
                            
                    })
                    .error(function(data,status,headers, config){
                        User.isLogged = false;
                        User.username = '';      
                    })
            }
            
    }]);




