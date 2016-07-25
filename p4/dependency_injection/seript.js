/* 
 * Dependency Injection : it is a software design pattern that deals withe how componens get hold of their dependencies.
 * The Angular injector subsystem is in charge of creating components, resoling their dependencies, and providing them to components as requested.
 */

//Factory Methods
//The way you define a directive, servie,or filter is with a factory fucntion. the methods are registerd with modules. the recommended way of declaring factories is.

var myApp = angular.module('myModule',[]);
    myApp.factory('serviceId', ['dependentService', function(depndenceService){
            // .....
    }]);
    myApp.directive('serviceId', ['dependentService', function(depndenceService){
            // .....
    }]);
    myApp.filter('serviceId', ['dependentService', function(depndenceService){
            // .....
    }]);
        

//Module Methods
/*we can specify function ro run at configuration and run time for a module by calling the config and run methods. these function are injectable with dependencies just like the factory function above;*/

var myApp = angular.module('myModule',[]);
    myApp.config(['dependentProvider', function(depndenceProvider){
            //....
    }]);
    myApp.run(['dependentService', function(depndenceService){
            //....
    }])


// Controllers
/*controllers are 'classes' or 'constructor function' that are responsible for providing the application behavior that supports the declarative markup in the template. The recommentded way of declaring controllers is using the array notation.*/

someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
  //...
  $scope.aMethod = function() {
    //...
  }
  //...
}]);

//Dependency Annotation

/*1.Inline Array Annotation*/
someModule.controller('MyControlle',['$scope','greeter',function($scope,greeter){
        // code will be here
}]);

/*2.$inject Property Annotation*/
var MyController = function($scope, greeter){
    // 
}
MyController.$inject = ['$scope', 'greeter'];
someModule.controller('MyController',MyController);

/*3.Implicit Annotation*/
someModule.controller('MyController',function($scope,greeter){
    //ljdlkjflka
})

        




        
