// (function(angular) {
//   'use strict';
// angular.module('docsSimpleDirective', [])
//   .controller('Controller', ['$scope', function($scope) {
//     $scope.customer = {
//       name: 'Naomi',
//       address: '1600 Amphitheatre'
//     };
//   }])
//   .directive('myCustomer', function() {
//     return {
//       template: 'Name: {{customer.name}} Address: {{customer.address}}'
//     };
//   });
// })(window.angular);


// example 1

/*(function(angular){
  'use strict';
  var myApp = angular.module('docsSimpleDirective', []);
    myApp.controller('Controller',['$scope',function($scope){
      $scope.customer = {
        name: "Naomi",
        address: '1600 Amphiteate'
      };
    }]);
    myApp.directive('myCustomer', function(){
      return{
        template: 'Name : {{customer.name}} Address : {{customer.address}}'
      };
    });
})(window.angular);
*/

// example 2
/*(function(angular){
  var myApp = angular.module('docsTemplateUrlDirective', []);
      myApp.controller('Controller',['$scope',function($scope){
        $scope.customer = {
          name : "Wakidur Rahman",
          address : "Uttara Dhaka 1230"
        };
      }]);
      myApp.directive('myCustomer',function(){
        return{
          restrict: 'A',
          templateUrl : 'my-customer.html'
        }
      })
})(window.angular);*/


// example 3
(function(angular){
  'use strict';
  var myApp = angular.module('docsScopeProblemExample', []);
  myApp.controller('NaomiController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  myApp.controller('IgorController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Igor',
      address: '123 Somewhere'
    };
  }])
  myApp.directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    };
  });

})(window.angular)