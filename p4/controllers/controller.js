/* 
*17/04/2016
 */
//myMoudleApp.controller("moduleControll", function($scope){
//    $scope.firstName = "Wakidur ";
//    $scope.lastName = "Rahman";
//});


/*-----------------------AngularJS Modules---------------------------*/
//app.directive("w3TestDirective", function() {
//    return {
//        template : "I was made in a directive constructor!"
//    };
//});
//creatNewDirrective.directive( "w3-test-directive", function() {
//    return {
//        template: "I was made in a directive constructor!"
//    }    
//})


/*-----------------------AngularJS Directives---------------------*/
elementApp.directive('w3TestDirective', function() {
    return {
        template: "<h1>Made by a directive!</h1>"
    }
});

restrictionsApp.directive('RestrictionDirective' , function() {
    return{
        restrict : "E", // Attribute
        template : "<h1>Restrictions for Element name</h1>"
//        restrict : "A", // Attribute
//        template : "<h1>Restrictions for Attribute</h1>"
//        restrict : "C", // Attribute
//        template : "<h1>Restrictions for Class</h1>"
//        restrict : "M", // Attribute
//        template : "<h1>Restrictions for Comment</h1>"
    }
})

