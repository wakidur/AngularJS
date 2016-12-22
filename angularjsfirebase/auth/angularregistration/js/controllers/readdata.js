/* 
 * Read controller
 */

angular.module('readApp').controller('userInfo', ['$scope', '$timeout', function ($scope, $timeout) {


        var starCountRef = firebase.database().ref('userbook/');
        $scope.myData = [];
        starCountRef.on("child_added", function (snapshot) {

            $timeout(function () {
                $scope.myData.push(snapshot.val());
                console.log($scope.myData);
            });
        });












    }]);




