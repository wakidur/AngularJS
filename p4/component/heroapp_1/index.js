(function(angular){
  'use strict';
var mainApp = angular.module('heroApp', []);
    mainApp.controller('mainCtrl', function() {
        this.hero = {
          id: 1,
          name: 'Spawn',
          department : 'Web site developer'
        };
    });
})(window.angular);


