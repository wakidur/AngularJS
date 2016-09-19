myApp.factory('Authentication', ['$rootScope', '$firebaseAuth',
  function($rootScope, $firebaseAuth) {
      
  var ref = new Firebase("https://wkrfirst.firebaseio.com");
  var auth = $firebaseAuth(ref);

  return {
    login: function(user) {
      $rootScope.message = "Welcome " + $scope.user.email;
    }, //login

    register: function(user) {
      auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(regUser) {
        $rootScope.message = "Hi " + user.firstname +
        ", Thanks for registering";
      }).catch(function(error) {
        $rootScope.message = error.message;
      }); // //createUser
    } // register
  };

}]); //factory
