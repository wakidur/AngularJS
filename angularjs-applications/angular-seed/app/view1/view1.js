(function(angular){
    'use strict';
    angular.module('myApp.view1',['ngRoute'])
    .controller('View1Ctrl', [function() {
         console.log("hello view 1");
    }]);
})(window.angular)
