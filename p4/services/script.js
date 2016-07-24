
(function (angular) {
    'use strict';
    var mainApp = angular.module('myServiceModule', [])
    mainApp.controller('MyController', ['$scope', 'notify', function ($scope, notify) {
            $scope.callNotify = function (msg) {
                notify(msg);
            };
        }])
    mainApp.factory('notify', ['$window', function (win) {
            var msgs = [];
            return function (msg) {
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

(function (angular) {
    'use strict';
    var myApp = angular.module('myServiceModule', []);
    myApp.controller('MyController', ['$scope', 'notify', function ($scope, notify) {
            $scope.callNotify = function (msg) {
                notify(msg);
            };

        }]);
    myApp.factory('notify', ['$window', function (win) {
            var msgs = [];
            return function (msg) {
                msgs.push(msg);
                if (msgs.length == 3) {
                    win.alert(msgs.join('\n'));
                    msgs = [];
                }
            };
        }]);
})(window.angular);



(function(angular){
    // Using a service
angular.module('myServiceModule', []).controller('MyController',['$scope','notify', function($scope, notify){
        $scope.callNotify = function(msg){
            notify(msg);
        }
}]).factory('notify',['$window', function(win){
    var msgs = [];
    return function(msg){
        msgs.push(msg);
        if(msgs.length == 3){
            win.alert(msgs.join("\n"));
            msgs = [];
        }
    }
}]);

})(window.angular);


//The example module below has two services, each with verious dependencies:

var batchModule = angular.module('batchModule', []);
/*
 * the bachLog servie allow for messages to be queued in memory and flushed
 * to the console.log every 50 seconds
 * @param{*} message Message to be logged.
 *
 **/

batchModule.factory('batchLog', ['$interval','$log', function($interval,$log){
        var messageQueue = [];
        function log(){
            if(messageQueue.length){
                $log.log('batchLog messages:' , messageQueue);
                messageQueue = [];
            }
        }
        // start periodic checking
        $interval(log, 50000);
        return function(message){
            messageQueue.push(message);
        }
}]);


/**
 * routeTemplateMonitor monitors each $route change logs the current
 * template via the 'batchLog' service
 */
batchModule.factory('routeTemplateMonitor',['$route','batchLog','$rootScope', function($route, batchLog, $rootScope){
        return {
            startMonitoring : function() {
                $rootScope.$on('$routeChangeSuccess', function(){
                    batchLog($route.current ? $route.current.template : null);
                })
            }
        }
}])
