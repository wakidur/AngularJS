'use strict';

angular.module('myApp.view2',['ngRoute'])
    .controller('View2Ctrl', ['$scope',function($scope) {
            $scope.data = "hello world wakidur";
            $scope.value = "we are here for you";
            $scope.json = [
                {
                    "id" : 1,
                    "name" : "wakidur",
                    "department" : "IT",
                    "title" : "UI/UX developer"
                },
                {
                    "id" : 2,
                    "name" : "wakidur",
                    "department" : "IT",
                    "title" : "UI/UX developer"
                }
            ]
        console.log("hello view 2");
    }]);