(function(angular) {
  'use strict'; 

var app = angular.module('myApp', []);
    app.directive('chart', function(){
        return {
            replace: true,
            transclude: true,
            templateUrl: 'chart.html',
            controller: function($scope,$element,$attrs){
                this.name = 'chartDirective';
            }
        }
    });
    app.directive('datapoint', function(){
        return{
            return: true,
            //replace : 'chart', // siblime "datapoint" directive
            replace : '^chart', // parents of "datapoint" directive
            template: '<circle cx="20" cy="20" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#fff" stroke="#5B90BF"/>',
            link: function(scope, element, attrs){
                scope.redius = 4;
                scope.strokeWidth = 3;
                
            }
        }
    })

})(window.angular);



