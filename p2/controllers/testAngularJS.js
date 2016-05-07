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

// AngularJs Include
mainAppIncludes.controller("studentControllerIncludes", function($scope) {
   $scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});


//AngularJS - Ajax
//function studentController( $scope, $http ) {
//    var url = "data/data.test";
//    $http.get(url).success(function(response){
//        $scope.students = response;
//    });
//}

/*=====================AngularJS - Ajax=====================================*/

shoppingCartModule.controller("ShoppingCartController",
        function ($scope) {
            $scope.items = [
                {
                    product_name: "Product 1", 
                    price: 50
                },
                {
                    product_name: "Product 2", 
                    price: 20
                },
                {
                    product_name: "Product 3", 
                    price: 180
                }
            ];
            $scope.remove = function (index) {
                $scope.items.splice(index, 1);
            };
           
            
            $scope.addItem = function (index) {
                var  itemCount = $scope.items.length;
                $scope.items.push({
                     product_name: "Product " + ( itemCount + 1),
                     price: $scope.items[index].price
                });
                
            };
        }
);

namesModule.controller("NamesController",
        function ($scope) {
            $scope.names = [
                {username: "Nitin"},
                {username: "Mukesh"},
                {username: "Mdfa"},
                {username: "ddfdukesh"},
                {username: "df dfdfa df"}
            ];
        }
);
AJAXfirst.controller("studentControllerAJAX", function($scope, $http) {
     $http({
        method : "GET",
        url : "data/data-ajax.json"
    }).then(
        function mySucces(response) {
       
            $scope.students = response.data;
         
           
        }, function myError(response) {
        $scope.students = response;
       
    });
    
    var url = "data/data-ajax.json";
    $http.get(url).success(function (response) {
        $scope.students1 = response;
        
    });
});


AJAXsecond.controller('myCtrl', function ($scope, $http) {
    $http.get("webpage/helloAJAX.html")
            .then(function (response) {
                $scope.myWelcome = response.data;
            });
});


myApplist.controller('customersCtrl', function($scope, $http) {
     $http({
        method : "GET",
        url : "data/w3school.json"
    }).then(
      function (response) {
      $scope.myData = response.data.records;
      
  });
});
//Using multiple ng-app withing one page
angular.bootstrap(document.getElementById("App2"),['namesList']);
angular.bootstrap(document.getElementById("App3"), ['AJAXfirst']);
angular.bootstrap(document.getElementById("App4"), ['AJAXsecond']);
angular.bootstrap(document.getElementById("App5"),['myApplist']);


//$scope section
mainAppScope.controller("shapeControllerScope" , function($scope){
    $scope.message = "In Shape controller";
    $scope.type = "Shape of Main controller";
});
mainAppScope.controller("circleController" , function($scope){
    $scope.message = "In Shape controller";
   
});
mainAppScope.controller("squareController" , function($scope){
    $scope.message = "In Shape controller";
    $scope.type = "Square";
});


         

        




