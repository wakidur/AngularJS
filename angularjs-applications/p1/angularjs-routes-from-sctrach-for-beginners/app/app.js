var myModule = angular.module('Angello', ['ngRoute']);
    myModule.controller('MainCtrl',['$scope',function($scope){
            $scope.hello = "hello world "
    }]);
    myModule.run(function($rootScope, LoadingService){
        $rootScope.$on('$routeChangeStart', function(e , curr, prev){
            LoadingService.setLoading(true);
        });
        $rootScope.$on('$routeChangeSuccess', function(e, curr, prev){
            LoadingService.setLoading(false);
        })
    });
    myModule.config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'app/templates/storyboard.html',
                controller: 'StorybardCtrl',
                controllerAs : 'storyboard'
            })
            .when('/dashboard',{
                templateUrl: 'app/templates/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs : 'dashboard'
            })
            .when('/users',{
                templateUrl: 'app/templates/users.html',
                controller: 'UsersCtrl',
                controllerAs : 'users'
            })
            
            //step first
            .when('/users/:userId',{
                templateUrl: 'app/templates/user.html',
                controller: 'UserCtrl',
                controllerAs:'myUser'
            })
            // step second
            .when('/users/:userId',{
                templateUrl : 'app/templates/user.html',
                controller: 'UserCtrl',
                controllerAs: 'myUser',
                resolve: {
                    user: function($route, $routeParams, UsersModel){
                        var userId = $route.current.params['userId'] 
                                    ? $route.current.params['userId']
                                    :$routeParams['userId'];
                        return UsersModel.fatch(userId);
                        
                    },
                    stories: function(StoriesModel) {
                        return StoriesModel.all();
                    }
                }
            })
            .otherwise({
                redirect: '/'
            });
    });
    
    myModule.controller('StorybardCtrl',function($scope){
        $scope.title = "Invoice Script Using PHP MySQL jQuery Ajax And Boostrap - Version 2";
        $scope.name = "Invoice Script Using PHP MySQL jQuery Ajax And Boostrap - Version 2";
    });
    myModule.controller('DashboardCtrl',function($scope){
    	$scope.title = "Responsive PHP Quiz Script";
    	$scope.name = "Responsive PHP Quiz Script";
    });
    myModule.controller('UsersCtrl',function($scope){
    	$scope.title = "user";
    	$scope.title = "User name : Wakidur Rahamn";
    });


