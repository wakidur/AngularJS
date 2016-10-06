var myApp = angular.module('myApp', []);
myApp.controller('namesCtrl', ['$scope', function ($scope) {
        $scope.names = [
            {name: 'Jani', country: 'Norway'},
            {name: 'Carl', country: 'Sweden'},
            {name: 'Margareth', country: 'England'},
            {name: 'Hege', country: 'Norway'},
            {name: 'Joe', country: 'Denmark'},
            {name: 'Anular', country: 'Norway'},
            {name: 'Jani', country: 'Norway'},
            {name: 'Gustav', country: 'Sweden'},
            {name: 'Birgit', country: 'Denmark'},
            {name: 'Mary', country: 'England'},
            {name: 'Kai', country: 'Norway'}
        ];
        $scope.orderByMe = function (x) {
            $scope.myOrderBy = x;
            console.log("Click me");
        }
    }]);

/*   step - 2 */
myApp.filter('myFormat', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
myApp.controller('namesCtrlCustom', ['$scope', function ($scope) {
        $scope.names = [
            'Jani',
            'Carl',
            'Margareth',
            'Hege',
            'Joe',
            'Gustav',
            'Birgit',
            'Mary',
            'Kai'
        ];
}]);

/*step - 3*/

myApp.controller('FilterController', ['filterFilter','$scope', function(filterFilter,$scope){
        this.array = [
            {name: 'Tobias'},
            {name: 'Jeff'},
            {name: 'Brian'},
            {name: 'Igor'},
            {name: 'James'},
            {name: 'Brad'}
        ];
        this.filteredArray = filterFilter(this.array, 'a');
        
}]);


 /*step - 4*/
myApp.filter('reverse', function(){
    /*
    *the filter function should be a pure function, 
    *which means that it should always return the same result 
    *given the same input arguments and should not affect external state
    */
   return function(input,uppercase) {
        input = input || '';
        var out = '', i = 0;
        console.log("Init Value of input : " + input + "\n" + "Init Value of Output  : " + out + "\n");
        for( ; i < input.length ; i++) {
            //The charAt() method returns the specified character from a string.
            out = input.charAt(i) + out;
            console.log("The character at index is '" + input.charAt(i)   + "'" + "\n");
            //console.log(out)
        }
        if (uppercase){
            out = out.toUpperCase();
        }
        return out;
   };
});
myApp.controller('MyController', ['$scope','reverseFilter', function($scope,reverseFilter){
    $scope.greeting = 'Hello Wakidur!';
    //$scope.filteredGreeting = reverseFilter($scope.greeting);
}])
 
 



