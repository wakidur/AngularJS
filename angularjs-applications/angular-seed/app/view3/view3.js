(function(angular){
    angular.module('myApp.view3',['ngRoute'])
    .controller('View3Ctrl', ['$scope','$http',function($scope, $http) {
            $scope.data = "hello world wakidur";
            $scope.value = "we are here for you";
            $http.get('view3/data.json').then(function(res){
                $scope.todos = res.data;
                console.log($scope.todos);
            });
            
            $scope.listOfCustomers = null;
             $scope.model = {};
            $http.get('view3/getAllCustomers.json')
                .success(function (data) {
                     $scope.listOfCustomers = data.GetAllCustomersResult;
                })
                .error(function (data, status, headers, config) {
                     //  Do some error handling here
            });

            
            console.log("hello view 3");
    }]);
})(window.angular);


