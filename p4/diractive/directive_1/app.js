(function(angular) {
  'use strict'; 
angular.module('myApp', []);
angular.module('myApp').controller('NaomiController',NaomiController);
angular.module('myApp').controller('IgorController',IgorController);

NaomiController.$inject = ['$scope'];
IgorController.$inject = ['$scope'];

function NaomiController($scope){
    $scope.customer = {
        name :  "Namoni",
        address : "1600 Amphitheatre"
    };
};

function IgorController($scope) {
    $scope.customer = {
        name :  "Igor",
         address : "123 Somewhere"
    };
}
//Create coutom directive
    angular.module('myApp').directive("myCustome", function(){
        return {
          restrict: 'E',
          templateUrl: 'my-customer.html'
        };
    });
})(window.angular);
