(function(angular) {
  'use strict'; 

//step - 3
var app = angular.module('myApp', []);
    app.controller('MainControllerThird', function($scope){
        $scope.title = 'Title from main';
        $scope.subtitle = 'Subtitle from Main';
    });
    app.directive('heading', function(){
        return {
            restrict:"EACM",
            replace: true,
            transclude: true,
            scope : {
                title : "@",
                subtitle : '@'
            },
            template : '<header><h1>{{title}}</h1><h2>{{subtitle}}</h2><input ng-model="subtitle"/><h3 ng-transclude></h3></header>'
        };
    })

})(window.angular);



