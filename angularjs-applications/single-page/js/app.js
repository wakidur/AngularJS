(function(){
    var singlePageApp = angular.module('singlePageApp', ['ngRoute']);
    
    singlePageApp.config(function($routeProvider){
         $routeProvider
             .when('/', {
                templateUrl : 'partials/home.html',
                controller : 'HomeController'
            })
            .when('/quiz', {
                templateUrl : 'partials/quiz.html',
                controller : 'QuizController'
            }) 
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller : 'ContactController'
            })
            .otherwise({
                redirect: '/'
            });
    });
    
    
    singlePageApp.controller('HomeController',function($scope){
        $scope.title = "Invoice Script Using PHP MySQL jQuery Ajax And Boostrap - Version 2";
    });
    singlePageApp.controller('QuizController',function($scope){
    	$scope.title = "Responsive PHP Quiz Script";
    });
    singlePageApp.controller('ContactController',function($scope){
    	$scope.title = "Contact";
    });
})();


