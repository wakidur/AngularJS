(function(angular) {
  'use strict'; 
angular.module('myApp', []);
angular.module('myApp').controller('myTransclude',myTransclude);
myTransclude.$inject = ['$scope'];
function myTransclude($scope){
    $scope.name = 'Wakidur';
    $scope.message = 
            'It makes it so that the contents of a transcluded directive have whatever ';
};
//Create coutom directive
angular.module('myApp').directive('myDialog',function(){
    return {
        restrict : 'E',
        transclude : true,
        soppe : {},
        templateUrl : 'my-customer.html'
    };
}); 
angular.module('myApp').directive('myDialogNew', function(){
    return {
        restrict : "E",
        transclude: true,
        scope : {},
        templateUrl : 'my-customer.html',
        link : function(scope) {
            scope.message = 'would reference the outside scope'
        }
    }
});

angular.module('myApp').controller("myTranscluders",myTranscluders);
myTranscluders.$inject = ['$scope', '$timeout'];
function myTranscluders($scope, $timeout){
    $scope.name = "Hello Tobias";
    $scope.message = '';
    $scope.hideDialog = function(message) {
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function(){
            $scope.message = '';
            $scope.dialogIsHidden = false;
        }, 2000);
    }
};
angular.module('myApp').directive('myDilogSecond', function(){
    return {
        restrict : "E",
        transclude : true,
        scope : {
            'close' : '&onClose'
        },
        templateUrl : 'my-dialog-close.html'
    }
})




})(window.angular);



