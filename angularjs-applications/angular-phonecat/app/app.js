(function(angular){
    // Define the `phonecatApp` module
    var phonecatApp = angular.module('phonecatApp', []);

    // Define the `PhoneListController` controller on the `phonecatApp` module
        phonecatApp.controller('PhonelistController',['$scope',function($scope) {
          $scope.phones = [
            {
              name: 'Nexus S',
              snippet: 'Fast just got faster with Nexus S.'
            }, {
              name: 'Motorola XOOM™ with Wi-Fi',
              snippet: 'The Next, Next Generation tablet.'
            }, {
              name: 'MOTOROLA XOOM™',
              snippet: 'The Next, Next Generation tablet.'
            }
          ];
    }]);


})(window.angular)








