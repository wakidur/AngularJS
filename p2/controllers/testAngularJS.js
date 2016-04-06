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
        fees: 500,
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


//Angularjs Filter
mainAppFilters.controller('studentControllerFilters', function( $scope ){
    $scope.filters = {
        firstName : "Mahesh",
        lastName : "Parashar",
        fees: 500,
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

//Angularjs Table

mainAppTable.controller('studentTable', function ($scope) {
    $scope.table = {
        firstName: "Mahesh",
        lastName: "Parashar",
        fees: 500,
        subjects: [
            {name: 'Physic', marks: 70},
            {name: 'Chemistry', marks: 80},
            {name: 'Math', marks: 69},
            {name: 'Englis', marks: 99},
            {name: 'Hindi', marks: 67}
        ],
        fullName: function () {
            var studentObject = {};
            studentObject = $scope.table;
            return studentObject.firstName + "  " + studentObject.lastName;
        },
        Subject: function () {
            var studentSub = {};
            studentSub = $scope.table;
            return studentSub.subjects[0].name;
//            $.each(studentSub.subjects,function( index, value){
//               console.log(value.name +  " " + value.marks);
//                return value.name +  " " + value.marks;
//            });
            
        }
    };
});


// AngularJs Form
mainAppForm.controller('studentControllerForm', function ($scope) {
    $scope.reset = function () {
        this.firstName = "Wakidur";
        this.lastName = "Rahman";
        this.email = "wakidur@gmail.com";
    }

    $scope.reset();
});
         

        




