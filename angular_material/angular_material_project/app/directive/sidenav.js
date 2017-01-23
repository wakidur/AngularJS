(function(angular) {
  'use strict'; 
angular.module('myApp').directive("customSidebar",function(){
    return{
        restrict : 'E',
        templateUrl : 'app/views/side-nav.html',
        scope: {
             
        }
    }
});

})(window.angular);
