var config = {
    apiKey: "AIzaSyDlxGh62Zc5vQ4Xlcz_kyFCfm0UdTWngSU",
    authDomain: "wkrfirst.firebaseapp.com",
    databaseURL: "https://wkrfirst.firebaseio.com",
    storageBucket: "wkrfirst.appspot.com",
};
firebase.initializeApp(config);
var myApp = angular.module('myApp', ['ngRoute','firebase']);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);

