myApp.factory("Auth", ["$firebaseAuth",
    function ($firebaseAuth) {
        return $firebaseAuth();
    }
]);

myApp.factory('Authentication', ['$rootScope', 'Auth', function ($rootScope, Auth) {
        return {
            login : function (user) {
                $rootScope.message = "Welcome" + $scope.user.email;
            }, // login
            register: function (user) {
                Auth.$createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (firebaseUser) {
                            $rootScope.message = "User created with uid: " + firebaseUser.uid;
                            $rootScope.username = "Hi: " + user.firstname;
                        }).catch(function (error) {
                            $rootScope.message = error.message;
                });//create user
            }//register
        }
    }])



