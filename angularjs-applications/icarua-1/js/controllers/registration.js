
myApp.controller('RegistrationController', ['$scope','$http','$location', function($scope,$http,$location) {
        $scope.formData = {};
        $scope.login = function() {
        $scope.emailAddress = $scope.user.email;
        $scope.password = $scope.user.password;
        console.log( "Email: " + $scope.emailAddress + "Password " + $scope.password );
        $scope.message = "Welcome " + $scope.user.email;
    };

    // function to add user data
    $scope.signin = function(isValid){
        
        if(isValid){
            
            $http.post('action.php' , {
                "company_name": $scope.company_name,
                "email": $scope.email,
                "phone_number" : $scope.phone_number,
                "address" : $scope.address,
                "category" : $scope.category,
                "service" : $scope.formData,
                "service_area_zip" : $scope.service_area_zip,
                "working_hours" : $scope.working_hours,
                "password" : $scope.password
            }).success(function (data, status, headers, config) {
                
                
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
                
                //console.log($scope.status + $scope.data + $scope.)
                
                if (data.status) {
                    $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                   // $location.path('/deshboard');
                   console.log("success true " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n");
                } else {
                     
                    $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                    console.log("success false " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n");
                }
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                    $scope.compnay_logo = data.company_logo;
                console.log("Error " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n")
            });
             
        } else {
            console.log("Form is not valid")
        }
//        $scope.user = {
//            "company_name": $scope.company_name,
//            "email": $scope.email,
//            "phone_number" : $scope.phone_number,
//            "address" : $scope.address,
//            "category" : $scope.category,
//            "service" : $scope.service,
//            "service_area_zip" : $scope.service_area_zip,
//            "working_hours" : $scope.working_hours,
//            "password" : $scope.password
//        };
//        
//        console.log("Example " + 
//                "company_name : " +
//                $scope.company_name +
//                "\n" +  
//                "Email: "+ 
//                $scope.user.email + 
//                "\n"+
//                "phone_number: " +
//                $scope.phone_number +
//                "\n" +"address : " + 
//                $scope.address +
//                "\n" +
//                "category : " +
//                $scope.category +
//                "\n"+
//                "service : " +
//                $scope.service +
//                "\n" +
//                "service_area_zip : " + 
//                $scope.service_area_zip +
//                "\n" + 
//                "working_hours : " +
//                $scope.working_hours +
//                "\n" +
//                "password : " +
//                $scope.password + 
//                "\n" );

/*
        $http.post('action.php', {
            
                "company_name": $scope.company_name,
                "email": $scope.email,
                "phone_number" : $scope.phone_number,
                "address" : $scope.address,
                "category" : $scope.category,
                "service" : $scope.service,
                "service_area_zip" : $scope.service_area_zip,
                "working_hours" : $scope.working_hours,
                "password" : $scope.password
                
            }).success(function (data, status, headers, config) {
                console.log(data);
                
                $scope.status = status;
                $scope.data = data;
                scope.result = data;
                if (data.status) {
                    $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                   // $location.path('/deshboard');
                   console.log("success true " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n");
                } else {
                     
                    $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                    console.log("success false " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n");
                }
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.company_name = data.company_name,
                    $scope.email = data.email;
                    $scope.phone_number = data.phone_number;
                    $scope.address = data.address;
                    $scope.category = data.category;
                    $scope.service = data.service;
                    $scope.service_area_zip = data.service_area_zip;
                    $scope.working_hours = data.working_hours;
                    $scope.password  = data.password;
                    $scope.compnay_logo = data.company_logo;
                console.log("Error " + $scope.company_name + $scope.email + $scope.phone_number + $scope.address+$scope.category+$scope.service+$scope.service_area_zip+$scope.working_hours+ $scope.password+$scope.compnay_logo + "\n")
            });
*/
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

