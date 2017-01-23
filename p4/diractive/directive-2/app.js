(function(angular) {
  'use strict'; 
angular.module('myApp', []);
angular.module('myApp').controller('myCurrent',myCurrent);
myCurrent.$inject = ['$scope'];
function myCurrent($scope){
    $scope.format = 'd/M/yy h:mm:ss a';
};


//Create coutom directive
angular.module('myApp').directive('myCurrentTime', 
    ['$interval', 'dateFilter', function($interval, dateFilter){
    function link(scope, element, attrs){
        var format, timeoutId;
        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }
        scope.$watch(attrs.myCurrentTime, function(value){
            format = value;
            updateTime();
            console.log(value);
        });
        element.on('$destroy', function(){
            $interval.cancel(timeoutId);
            console.log("interval " + $interval.cancel(timeoutId));
        });
        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function(){
            updateTime();
            console.log("UpdateTime " + updateTime())
        }, 1000);
    }
    return {
        link : link
    };
    }]);

/*
angular.module('myApp').directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}]);
 */
   
})(window.angular);



