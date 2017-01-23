(function(angular) {
    'use strict'; 
    angular.module('myApp').controller('myEasySteps',myController);
    myController.$inject = ['$scope','$http'];
    function myController($scope,$http){
        $scope.title = "SOLUTION IN 3 EASY STEPS";
        $scope.subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
        $http.get("data/easy-step.json").then(function(response) {
            $scope.myData = response.data;
        });
    }
})(window.angular);


