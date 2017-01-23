(function(angular) {
    'use strict'; 
    angular.module('myApp').config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "app/views/main.html",
            controller: "myController"
        })
        .when("/easy-steps", {
            templateUrl: 'app/views/easy-steps.html',
            controller: "myEasySteps"
        })
        .otherwise({redirectTo:'/'});
    });

})(window.angular);

