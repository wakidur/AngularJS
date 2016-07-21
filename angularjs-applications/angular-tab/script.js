var myApp = angular.module('myApp', []);

    myApp.factory('Items', ['$http', function ($http) {
            return {
                get: function (callback) {
                    $http.get('items.json').success(function (data) {
                        callback(data);
                    })
                }
            }
    }]);

    myApp.factory('Categories', ['$http', function ($http) {
            return {
                get: function (callback) {
                    $http.get('categories.json').success(function (data) {
                        callback(data);
                    })
                }
            }
    }]);

    // Config and Routes 
    myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "home.html"
            })
            .when('/item/:id', {
                templateUrl: "item.html"
            }).
            otherwise('/');
    }]);

    myApp.controller('headerController',['$scope','$location', function ($scope, $location) {
        $scope.goHome = function () {
            $location.path('/');
            console.log($location.path('/'));
        };
    }]);

    function Ctrl($scope) {
        $scope.greeting = 'hello';
        console.log($scope.greeting);
    }
    
    myApp.controller('ListController', function ($scope, $route, $location, $http, Categories) {
        $scope.sendCategory = function (category) {
            // How can I pass this value to ItemController?
            $scope.search = category.name;
        };
        
        $scope.orderProp = 'date';
        
        $scope.tab = function (tabIndex) {
            //Sort by date
            if (tabIndex == 1) {
                //alert(tabIndex);
                console.log(tabIndex);
                $scope.orderProp = 'date';
            }
            //Sort by views 
            if (tabIndex == 2) {
                console.log(tabIndex);
                $scope.orderProp = 'views';
            }
        };
        
        $scope.sort = function (item) {
            if ($scope.orderProp == 'date') {
                return new Date(item.date);
            }
            return item[$scope.orderProp];
        }

    });
    
    
    // Controllers
    myApp.controller('ItemController', function ($scope, $route, $location, $http, Items) {
        Items.get(function (response) {
            $scope.items = response;
        });
        // Update this value dynamically - onclick
        $scope.filters = "food";
        $scope.viewDetail = function (item) {
            $location.path('/item/' + item.id);
        }
    });

    myApp.controller('CategoryController', function ($scope, $route, $location, $http, Categories) {
        Categories.get(function (response) {
            $scope.categories = response;
        });
    });

    myApp.controller("tabsController", function ($scope) {
        $scope.orderProp = 'date';
    });

    myApp.controller('ItemDetailController', function ($scope, $route, $location, $http, Items) {
        Items.get(function (response) {
            $scope.items = response;
            if ($route.current.params.id) {
                angular.forEach($scope.items, function (v, k) {
                    if (v.id == $route.current.params.id) {
                        $scope.currItem = $scope.items[k];
                        return false;
                    }
                });
            }
        });
    });



