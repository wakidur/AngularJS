/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module( 'myApp' , [] );
myApp.controller( 'GreetingController', ['$scope', function( $scope ) {
    $scope.greeting = "Hola!";
}]);



