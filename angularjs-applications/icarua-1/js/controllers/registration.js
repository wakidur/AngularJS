
myApp.controller('RegistrationController', ['$scope','$http', function($scope,$http) {
  
    $scope.login = function() {
        $scope.emailAddress = $scope.user.email;
        $scope.password = $scope.user.password;
        console.log( "Email: " + $scope.emailAddress + "Password " + $scope.password );
        $scope.message = "Welcome " + $scope.user.email;
    };

    // function to add user data
    $scope.signin = function(){
        $scope.user = {
            company_name: $scope.user.company_name,
            email: $scope.user.email,
            phone_number: $scope.user.phone_number,
            service: $scope.user.service,
            category: $scope.user.category,
            service_area_zip: $scope.user.service_area_zip,
            working_hours: $scope.user.working_hours,
            password: $scope.user.password,
            
            //insert_date_time: $scope.user.insert_date_time

        };
        
//        function imageValue(){
//            var file = $('#icompany_logo').
//        };
//
//
//
//            function MyCtrl($scope) {
//                $scope.data = 'none';
//                $scope.add = function () {
//                    var f = document.getElementById('file').files[0],
//                        r = new FileReader();
//                    r.onloadend = function (e) {
//                        var binary = "";
//                        var bytes = new Uint8Array(e.target.result);
//                        var length = bytes.byteLength;
//
//                        for (var i = 0; i < length; i++)
//                        {
//                            binary += String.fromCharCode(bytes[i]);
//                        }
//
//                        $scope.data = (binary).toString();
//
//                        alert($scope.data);
//                    }
//                    r.readAsArrayBuffer(f);
//                }
//            }
//




        console.log("posting data....");
        console.log($scope.user);
        
        
        
//        $http.post(JSON.stringify($scope.user)).success(function(){
//                /*success callback*/
//            console.log($scope.user);
//                
//        });
    };
      
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    $scope.single = function(image) {
          var formData = new FormData();
          formData.append('image', image, image.name);

          $http.post('upload', formData, {
              headers: { 'Content-Type': false },
              transformRequest: angular.identity
          }).success(function(result) {
              $scope.uploadedImgSrc = result.src;
              $scope.sizeInBytes = result.size;
          });
      };
  

}]);

