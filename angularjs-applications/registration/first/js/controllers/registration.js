myApp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
myApp.controller('RegistrationController', ['$scope','Auth', function($scope,Auth) {
  
  $scope.login = function() {
    $scope.message = "Welcome " + $scope.user.email;
  };

    $scope.register = function() {
        Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
            .then(function(firebaseUser) {
                $scope.message = "User created with uid: " + firebaseUser.uid;
                $scope.username = "Hi: " + $scope.user.firstname;
            }).catch(function(error) {
            $scope.error = error;
        });
    };

}]);