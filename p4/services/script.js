(function(angular) {
  'use strict';
var mainApp = angular.module('myServiceModule', [])
    mainApp.controller('MyController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }])
    mainApp.factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join("\n"));
        msgs = [];
      }
    };
  }]);
  
  
//  example - 2;
    mainApp.controller('CalcController', function ($scope, CalcService) {
        $scope.square = function () {
            $scope.result = CalcService.square($scope.number);
        }
    });
    mainApp.factory('MathService', function () {
        var factory = {};
        factory.multiply = function (a, b) {
            return a * b
        }
        return factory;  
    });

    mainApp.service('CalcService', function (MathService) {
        this.square = function (a) {
            return MathService.multiply(a, a);
        }
    });
  
  
  
  
  
  
})(window.angular);
