(function(angular){
     'use strict';
function HeroDetailController() {

}

var myApp = angular.module('heroApp');
    myApp.component('heroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});
})(window.angular);


