/* 
 * Controller
 */
//solit JavaScritp code
function studentController(scope){
    scope.student = {
        firstName : "Wakidur",
        lastName : "Rahman",
        fullName: function() {
            var stuentObject;
            stuentObject = scope.student;
            return stuentObject.firstName + " " + stuentObject.lastName;
        }
    }
}

//Controller for testAngularJs 4
mainApp.controller('studentController', function( $scope ){
    $scope.student = {
        firstName : "Mahesh",
        lastName : "Parashar",
        
        fullName : function() {
            var studentObject = {};
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});

//Angularjs Filter

mainAppFilters.controller('studentControllerFilters', function( $scope ){
    $scope.filters = {
        firstName : "Mahesh",
        lastName : "Parashar",
        fess: 500,
        subjects: [
            {name: 'Physic', marks : 70},
            {name: 'Chemistry', marks: 80},
            {name: 'Math' , marks : 69}
        ],
        
        fullName : function() {
            var studentObject = {};
            studentObject = $scope.filters;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});



