/*var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/custom.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
*/
//step-4
/*
var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/custom.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
*/
//step - 5

/*
var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/list', {
        templateUrl: 'partials/custom.html',
        controller: 'ListController'
  }).
    when('/details/:itemId', {
        templateUrl: 'partials/details_custom.html',
        controller: 'DetailsController'
  }).
    otherwise({
        redirectTo: '/list'
  });
}]);

*/
//step -6


var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

 myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/custom.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details_custom.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
