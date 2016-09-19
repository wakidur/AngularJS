var myApp = angular.module('myApp', ['ngRoute','imageupload']);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    when('/starerating', {
      templateUrl: 'views/starerating.html',
      controller: 'StarCtrl'
    }).
    when('/deshboard', {
      templateUrl: 'views/deshboard.html',
      controller: 'DeshboardController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);

