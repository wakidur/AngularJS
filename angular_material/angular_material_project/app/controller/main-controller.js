(function(angular) {
  'use strict'; 
angular.module('myApp').controller('myController',myController);
myController.$inject = ['$scope','$timeout','$mdSidenav','$http'];
function myController($scope, $timeout, $mdSidenav,$http){
    $scope.title = "Children within a Layout Container"
    $scope.one = "To customize";
    $scope.two = "Second";
    $scope.three = "Third";
    $http.get("data/main-contain.json").then(function(response) {
       $scope.myData = response.data;
        console.log( $scope.myData.icons );
        console.log( $scope.myData.servicename );
        console.log( $scope.myData.info );
        
    });
//    var conatindata = $http.get('data/main-contain.json').success(function(response) {
//        return response.data;
//    });
//    $http.get("data/main-contain.json")
//    .then(function(response) {
//        $scope.content = response;
//        $scope.statuscode = response.status;
//        $scope.statustext = response.statustext; 
//    });
//    console.log( $scope.content );
//    console.log( $scope.statuscode  );
//    console.log( $scope.statustext );
var mainInfo = null;
$http.get('data/main-contain.json').success(function(data) {
    mainInfo = data;
    console.log( mainInfo );
});
console.log( mainInfo );
//    $scope.toggleLeft = buildToggler('left');
//    function buildToggler(componentId) {
//      return function() {
//        $mdSidenav(componentId).toggle();
//      }
//    }
}
})(window.angular);

