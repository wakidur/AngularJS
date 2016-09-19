myApp.factory("Auth", ["$firebaseAuth",
    function ($firebaseAuth) {
        return $firebaseAuth(); // return initalize firebase connection
    }
]);

myApp.factory('Authentication', ['$rootScope', 'Auth', function ($rootScope, Auth) {
        return {
            login: function (user) {
                $rootScope.message = "Welcome" + $scope.user.email;
            }, // login
            register: function (user) {
                Auth.$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function writeUserData(firebaseUser) {
                        firebase.database().ref('users/' + firebaseUser.uid).set({
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            firebaseUser: firebaseUser.uid,

                    });// user info
                    $rootScope.message = "Hi" + user.firstname + " " + user.lastname ;
                    $rootScope.userid = "UserId " + firebaseUser.uid ;
                }).catch(function (error) {
                            $rootScope.message = error.message;
                        });//create user
            }//register
        }
    }])



