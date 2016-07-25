/* 
   *07/05/2016
*/
//index.php page
myApp.controller('dbCtrl', ['$scope', '$http', function ( $scope, $http) {
    $http.get("modulsphp/ajax-one.php")
         .success(function(data){
            $scope.data = data;
         })
        .error(function() {
            $scope.data = "error in fetching data";
        });
}]);

//index1.php page
fetch.controller('student', ['$scope', '$http', function ($scope, $http) {
    $http.get("modulsphp/fetch.php")
        .success(function(data){
             $scope.data = data;  
        })
        .error(function() {
            $scope.data = "error in fetching data";
     });
}]);
