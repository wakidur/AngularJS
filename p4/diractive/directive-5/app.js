(function(angular) {
  'use strict'; 
// step - 1
/*
var app = angular.module('MyApp', []);
    app.directive('heading', function(){
        return {
            restrict: 'EACM',
            replace : true,
            template : '<header> <h1> The First Title</h1></header>'
        }
    });
   */ 
 // (E)lement
 // (A)ttribute
 // (C)lass
 // co(M)ment
 
//  step - 2
/*
var app = angular.module('myApp', []);
app.controller('MainController', function($scope) {
    $scope.title = 'Tittle from Main';
    $scope.subtitle = 'Subtitle from Main';
});
app.directive('heading', function(){
    return {
        restrict: 'EACM',
        replace : true,
        scope : true,
        template : '<header><h1>{{title}}</h1> <h2>{{subtitle}}</h2> <input ng-model="title"/>'
    };
});
*/
//Default: parent scope
// true: child scope

//step - 3
var app = angular.module('myApp', []);
    app.controller('MainControllerThird', function($scope){
        $scope.title = 'Title from main';
        $scope.subtitle = 'Subtitle from Main';
        $scope.clicks = 0;
    });
    app.directive('heading', function(){
        return {
            restrict:"EACM",
            replace: true,
            scope : {
                title : "@",
                subtitle : '=',
                count : '&'
            },
            template : '<header ng-click="count()"><h1>{{title}}</h1><h2>{{subtitle}}</h2><input ng-model="subtitle"/></header>'
        };
    })

})(window.angular);



