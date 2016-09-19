myApp.factory("Auth", ["$firebaseAuth",
    function ($firebaseAuth) {
        return $firebaseAuth(); // return initalize firebase connection
    }
]);

myApp.factory('Authentication', ['$rootScope', '$location', '$firebaseObject' , 'Auth', function ($rootScope, $location, Auth, $firebaseObject) {
        
            
            firebase.auth().onAuthStateChanged(function(firebaseUser) {
                
                firebase.database().ref('users/').on('value', function(data) {
                                     console.log(data.val())
                                    $('#story').empty();
                                    data.forEach(function(data) {
                                      var emoji = data.val();
                                      $('#story').append('<p>'+emoji +'</p>');
                                    });
                                  })
                
//                 firebase.database().ref('users').child(uid).on('value', function(snapshot){
//                            console.log("hello");
//                                     var first_name = snapshot.val().firstname;
//                                     console.log("FirstName " + first_name);
//                                     $('#story').empty();
//                                    snapshot.forEach(function(data) {
//                                      var emoji = data.val();
//                                      $('#story').append('<p>'+emoji +'</p>');
//                                    });
//                                     
//                                 })
//                                    
//                    if (firebaseUser) {
////                        var ref = firebase.database().ref("users/" + firebaseUser.uid );
////                            ref.on("value", function(snapshot) {
////                                console.log(snapshot.val());
////                              }, function (errorObject) {
////                                console.log("The read failed: " + errorObject.code);
////                              });
//                        firebase.database().ref('users/' + uid).on('value', function(snapshot){
//                            console.log("hello")
//                                     var first_name = snapshot.val().firstname;
//                                     console.log("FirstName " + first_name);
//                                     $('#story').empty();
//                                    snapshot.forEach(function(data) {
//                                      var emoji = data.val();
//                                      $('#story').append('<p>'+emoji +'</p>');
//                                    });
//                                     
//                                 })
//                                         
//                                 
////                                firebase.database().ref('users/').on('value', function(snapshot) {
////                                    console.log(snapshot.val());
////                                  });
////                                  
////                                  firebase.database().ref('users').on('value', function(data) {
////                                    $('#story').empty();
////                                    data.forEach(function(data) {
////                                      var emoji = data.val();
////                                      $('#story').append('<p>'+emoji +'</p>');
////                                    });
////                                  })
//                        
////                        var starCountRef = firebase.database().ref('users/' + firebaseUser.uid);
////                        console.log(starCountRef);
////                        starCountRef.on('value', function(snapshot) {
////                           $rootScope.currentUser = snapshot.val();
////                           console.log($rootScope.currentUser);
//////                          updateStarCount(postElement, );
////                        });
////                        console.log("Signed in as:", firebaseUser.uid);
////                        var ref = firebase.database().ref("users/" + firebaseUser.uid );
////                        console.log("main data " + ref);
////                        //var userObj = $firebaseObject(ref);
////                        var reff = firebase.database().ref("users/" );
////                        var userObj = $firebaseObject(reff);
////                        $rootScope.currentUser = userObj;
////                        console.log("user data base:", userObj);
////                        console.log("user data base:", userObj.firstname);
//                        
//                    } else {
//                        $rootScope.currentUser = '';
//                        console.log("Signed out");
//                }
            });
//        firebase.auth().onAuthStateChanged(function (firebaseUser) {
//            if (firebaseUser) {
//                var ref = firebase.database().ref("users/" + firebaseUser.uid );
//                var userObj = $firebaseObject(ref);
//                $rootScope.currentUser = userObj;
//            } else {
//                $rootScope.currentUser = '';
//            }
//
//        });
        return {
            login: function (user) {
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                        .then(function (firebaseUser) {
                            $location.path('/success')
                            console.log("Signed in as:", firebaseUser.uid);
                            $rootScope.userid = firebaseUser.uid;
                        })
                        .catch(function (error) {
                            $rootScope.message = "Welcome" + $scope.user.email;
                });
            }, // login
            register: function (user) {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then(function writeUserData(firebaseUser) {
                            firebase.database().ref('users/' + firebaseUser.uid).set({
                                firstname: user.firstname,
                                lastname: user.lastname,
                                email: user.email,
                                firebaseUser: firebaseUser.uid,
                            });
                            $rootScope.message = "Hi" + user.firstname + " " + user.lastname;
                            $rootScope.userid = "UserId " + firebaseUser.uid;
                            console.log('Logged in successfully as: ', firebaseUser.uid);
                        }).catch(function (error) {
                    $rootScope.message = error.message;
                });//create user
            }//register
        }
    }])



