
myApp.controller('RegistrationController', ['$scope','$http','$location', 
    function($scope,$http,$location) {
        
        $scope.login = function() {
        $scope.emailAddress = $scope.user.email;
        $scope.password = $scope.user.password;
        console.log( "Email: " + $scope.emailAddress + "Password " + $scope.password );
        $scope.message = "Welcome " + $scope.user.email;
    };
    
    
        $scope.formData = {};
        $scope.save = function (da) {
            $http.post('action.php', da).success(function (response) {
                 console.log(response); // outputs your response from the server
            });     
            console.log(da); // outputs your selection passed from html to controller
        };
    // function to add user data
    $scope.signin = function(isValid){
        //$scope.plannerData = {};
        
        if(isValid){
            $http.post('action.php' , {
                "company_name": $scope.company_name,
                "email": $scope.email,
                "phone_number" : $scope.phone_number,
                "address" : $scope.address,
                //"services" : $scope.plannerData.services,
                "service_area_zip" : $scope.service_area_zip,
                "working_hours" : $scope.working_hours,
                "password" : $scope.password
            }).success(function (data, status, headers, config) {
                
                console.log(data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
                if (data) {
                   // $location.path('/deshboard');
                   console.log("success true ");
                } else {
                    console.log("success false ");
                }
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
               
                console.log("Error ")
            });
             
        } else {
            console.log("Form is not valid")
        }

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

