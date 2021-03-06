/*
var myApp = angular.module('myApp', []);

myApp.controller('MyController',['$scope','$http',function MyController($scope,$http) {
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
    });
}]);

*/
//step -2
/*
var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);
*/

//step -3
/*
var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);
*/
//step -4
/*
var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);

*/
//step - 5

/*
var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);
*/

// step - 6
(function(angular){
    var artistControllers = angular.module('artistControllers', ['ngAnimate']);
 
    artistControllers.controller('ListController', ['$scope', '$http', function( $scope, $http ) {
        $http.get('js/custom_data.json').success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        }).error(function () {
            $scope.error = "An Error has occured while loading posts!";
        });
    }]);

    artistControllers.controller('DetailsController', [
        '$scope', 
        '$http',
        '$routeParams', 
        function($scope, $http, $routeParams) {
            $http.get('js/custom_data.json').success(function(data) {
                $scope.artists = data;
                
               // artists.indexOf(item);
                //5
                
                
                $scope.whichItem = $routeParams.itemId;
                
                console.log( $scope.whichItem + " Which Item" );

                if ( $routeParams.itemId > 0) {
                    console.log( $routeParams.itemId + " check" );
                    $scope.prevItem = Number($routeParams.itemId) - 1;
                    console.log( $scope.prevItem + " true" + " " + Number($routeParams.itemId)   );
                } else {
                    $scope.prevItem = $scope.artists.length - 1;
                    console.log($scope.prevItem + "else");
                }

                if ( $routeParams.itemId < $scope.artists.length - 1 ) {
                    console.log($routeParams.itemId + " Other condetion check");
                    $scope.nextItem = Number($routeParams.itemId) + 1;
                    console.log( $scope.nextItem + " nextItem");
                } else {
                    $scope.nextItem = 0;
                    console.log( $scope.nextItem + " 0  nextItem");
                }

            }).error(function () {
                $scope.error = "An Error has occured while loading posts!";
            });
    }]);
})(window.angular)

 
