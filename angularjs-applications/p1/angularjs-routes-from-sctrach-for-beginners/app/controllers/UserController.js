var userModule = angular.module('Angello.User',[]);
    userModule.controller('UserCtrl',['$scope','$routeParams', function($scope,$routeParams){
            
//            $scope.users = [
//                {
//                "firstName" : "Wakidur",
//                "lastName" : "Rahman",
//                "email" : "Wakidur@yahoo.com"
//            },
//            {
//                "firstName" : "Wlid",
//                "lastName" : "Rahman",
//                "email" : "Walid@yahoo.com"
//            }
//        ];

//            first step
            var myUser = this;
            myUser.userId = $routeParams['userId'];
            
//            second step
            var myUser = this;
            myUser.user = user.data;
            myUser.getAssignedStories = function ( userId, stories) {
                var assignedStories = {};
                Object.keys(stroies, function(key , value) {
                    if(value.assignee == userId) {
                        assignedStories[key] = stories[key];
                    }
                });
                return assignedStories;
            };
            myUser.stories = myUser.getAssignedStories(myUser.userId, stories);
                  
        
    }]);

