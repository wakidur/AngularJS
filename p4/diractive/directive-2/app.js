(function(angular) {
  'use strict'; 
angular.module('myApp', []);
angular.module('myApp').controller('myController',myController);
myController.$inject = ['$scope'];
function myController($scope){
    $scope.naomi = { 
        name: 'Naomi', 
        address: '1600 Amphitheatre' };
    $scope.igor = { 
        name: 'Igor', 
        address: '123 Somewhere' };
};


//Create coutom directive
    angular.module('myApp').directive("myCustome", function(){
        return {
          restrict: 'E',
          scope : {
              customerInfo : '=info'
          },
          templateUrl: 'my-customer.html'
        };
    });
 
   
})(window.angular);



