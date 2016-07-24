(function(angular) {
    console.log("hello");
    var app = angular.module('myApp', []);
         console.log(app);
        app.controller('productsCtrl', function ($scope, $http) {
            console.log("main app");
    // read products
        $scope.getAll = function () {
            $http.get("read_products.php").success(function (response) {
                $scope.names = response.records;
                console.log(names);
                console.log(data);
            });  
        };
//          $http({
//            method : "GET",
//            url : "read_products.php"
//          }).then(function mySucces(response) {
//              $scope.names = response.records;
//              console.log($scope.myWelcome);
//            }, function myError(response) {
//              $scope.names = response.statusText;
//              console.log( $scope.myWelcome);
//          });
        console.log("End of the program");
        //console.log("function " + getAll());
    });
})(window.angular);