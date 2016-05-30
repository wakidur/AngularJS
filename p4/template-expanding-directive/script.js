//example 1
/*(function(){
   'use strict';
   var myApp = angular.module('docsSimpleDirective',[]);
       myApp.controller('Controller',['$scope',function($scope){
               $scope.customer = {
                   name : 'Wakidur Rahman',
                   address : 'Uttara Dhaka 1230'
               };
       }]);
       myApp.directive('myCustomer', function(){
           return {
               template : 'Name : {{customer.name}} Address : {{customer.address}}'
           };
       });
})(window.angular);
*/
//example 2;
/*
(function(){
   var myApp = angular.module('docsSimpleDirective',[]);
       myApp.controller('Controller',['$scope',function($scope){
           $scope.customer = {
               name : "Tom ",
               address : "Dhaka"
           };
           
       }]);
        myApp.directive('myCustomer', function(){
            return{
                restrict: 'A',
                templateUrl: 'my-customer.html'
            }
        });
            
})(window.angular);
*/
//example 3;
/*
(function(){
    var myApp = angular.module('docsScopeProblemExample',[]);
        myApp.controller('NaomiController',['$scope',function($scope){
            $scope.customer = {
                    id : '123456',
                    name : 'Wakidur Rahman',
                    address : 'Dhaka Bangladesh'
                
            }
        }]);
        myApp.controller('IgorController',['$scope',function($scope){
            $scope.customer = {
                    id : '123366',
                    name : 'Template angular',
                    address : 'USA '
                
            }
        }]);
        myApp.controller('EgorController',['$scope',function($scope){
            $scope.customer = {
                    id : '123312',
                    name : 'Angular',
                    address : 'UK '
                
            }
        }]);
        myApp.directive('myCustomer',function(){
            return{
                restrict:'E',
                templateUrl: 'my-customer.html'
            }
        });
})(window.angular);
*/
//example 4;
(function(){
    var myApp = angular.module('docsIsolationExample', [])
        myApp.controller('Controller', ['$scope', function($scope) {
          $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
          $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
        }]);
        myApp.directive('myCustomer', function() {
          return {
            restrict: 'E',
            scope: {
              customerInfo: '=info'
            },
            templateUrl: 'my-customer-plus-vojta.html'
          };
        });
})(window.angular)


