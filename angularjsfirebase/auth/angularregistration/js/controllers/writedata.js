/* 
 * Writing controller
 */
/*
angular.module('sampleApp').controller('userInfo' , ['$scope', function($scope){
        $scope.writeUserData = function(userId, name, email, message, addrss){ 
            var name = $scope.name;
            var email = $scope.email;
            var message = $scope.message;
            var address = $scope.address;
            console.log("Name :"+ name + "\n " + "Email :" + email + "\n " + " Message :"+ message + "\n " + "address :"+ address + "\n " );
            
            firebase.database().ref().child("userbook").push({
              username: name,
              useremail: email,
              usermessage : message,
              useraddress : address
            })
        } 
}]);
*/
angular.module('sampleApp').controller('userInfo' , ['$scope', function($scope){
        
        var playersRef = firebase.database().ref("userbook/");

            playersRef.on("child_added", function(data, prevChildKey) {
               var newPlayer = data.val();
               console.log("username: " + newPlayer.username);
               console.log("useremail: " + newPlayer.useremail);
               console.log("usermessage: " + newPlayer.usermessage);
               console.log("useraddress: " + newPlayer.useraddress);
               console.log("useraddress: " + prevChildKey);
            });
        $scope.albums = [
        {
            name: 'Red'
        },
        { 
            name: 'Green'
        },
        {
            name: 'Yellow'
        }];
        $scope.writeUserData = function(userId, name, email, message, addrss, albumNameArray){
            
            
            
            var name = $scope.name;
            var email = $scope.email;
            var message = $scope.message;
            var address = $scope.address;
            var mainarry = [];
            $scope.albumNameArray = [];
                angular.forEach($scope.albums, function(album){
                  if (album.selected) $scope.albumNameArray.push(album.name);
                });
            console.log("Name :"+ name + "\n " + "Email :" + email + "\n " + " Message :"+ message + "\n " + "address :"+ address + "\n " + albumNameArray);
           
//            firebase.database().ref().child("userbook").push({
//              username: name,
//              useremail: email,
//              usermessage : message,
//              useraddress : address,
//              albumNameArray : albumNameArray
//            })
        } 
}]);




