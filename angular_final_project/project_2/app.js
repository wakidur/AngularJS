var myApp = angular.module("myApp", ['ngRoute', 'core.phone']);
myApp.service('sharedProperties', function () {
    var property = 'First';

    return {
        getEmailProperty: function () {
            return property1;
        },
        getUserProperty: function () {
            return property2;
        },
        setEmailProperty: function (email) {
            property1 = email;
        },
        setUserProperty: function (user) {
            property2 = user;
        }
    };
});
myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'app/view/items.html',
                    controller: 'listController'
                })
                .when('/signin', {
                    templateUrl: 'app/view/signin.html',
                    controller: 'signinController'
                })
                .when('/create_account', {
                    templateUrl: 'app/view/create_account.html',
                    controller: 'createAccountController'
                })
                .when('/deshboard', {
                    resolve: {
                        "check": function ($location, $rootScope) {
                            if (!$rootScope.loggedIn) {
                                $location.path('/');
                            }
                        }
                    },
                    templateUrl: 'app/view/deshboard.html',
                    controller: 'deshboardController'
                })
                .when('/:phoneId', {
                    templateUrl: 'app/view/items_detail.html',
                    controller: 'productDetailController'
                })

                .otherwise({
                    redirectTo: '/'
                })

    }]);


myApp.controller('listController', ['$scope', '$http', function ($scope, $http) {
        $http.get("app/data/phones.json")
                .then(function (response) {
                    $scope.galleries = response.data;
                    console.log("$scope.galleries.imageUrl" + "\n");
                });
    }]);
/*     sign in controller   */
myApp.controller('signinController', ['$scope', '$http', '$location', '$rootScope', 'sharedProperties', function ($scope, $http, $location, $rootScope, sharedProperties) {
        $scope.signin = "Sign In";
        $scope.submit = function () {
            $http.post('signin.php', {
                "email": $scope.email,
                "password": $scope.password
            }
            ).success(function (data, status, headers, config) {
                if (data.status) {
                    // succefull loging
                    $rootScope.loggedIn = true;
                    $scope.isLogged = true;

                    sharedProperties.setEmailProperty(data.email);
                    sharedProperties.setUserProperty(data.user);

                    //$scope.email = data.email;
                    // $scope.username = data.name;
                    $location.path('/deshboard', data);

                    // console.log("success true " + "$scope.username " + $scope.username + "$scope.email " + $scope.email  + "\n");
                } else {
                    $scope.isLogged = false;
                    $scope.email = data.email;
                    $scope.username = data.name;

                    console.log("success false " + $scope.username + " " + $scope.email + "\n");
                }
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.isLogged = false;
                $scope.email = data.email;
                $scope.username = data.name;
                console.log("Error " + "$scope.username " + " $scope.username " + "\n")
            });



        }
    }]);

/*     deshboardController controller   */
myApp.controller('deshboardController', ['$scope', '$http', 'sharedProperties', function ($scope, $http, sharedProperties) {
        $scope.deshboard = "deshboardController";
        console.log(sharedProperties.getEmailProperty() + " " + sharedProperties.getUserProperty());
        $scope.EmailAddress = sharedProperties.getEmailProperty();
        $scope.UserName = sharedProperties.getUserProperty();
    }]);

myApp.controller('productDetailController', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };
    }]);



myApp.controller('createAccountController', ['$scope', '$http', function ($scope, $http) {
        $scope.createAccount = "Create account";
        $scope.errors = [];
        $scope.msgs = [];

        $scope.SignUp = function () {
            $scope.errors.splice(0, $scope.errors.length); // remove all error messages
            $scope.msgs.splice(0, $scope.msgs.length);

            $http.post('submitdata.php', {
                'user': $scope.user,
                'email': $scope.email,
                'password': $scope.password
            }
            ).success(function (data, status, headers, config) {
                if (data.msg != '')
                {
                    $scope.msgs.push(data.msg);
                }
                else
                {
                    $scope.errors.push(data.error);
                }
            }).error(function (data, status) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.errors.push(status);
            });
        }

    }]);