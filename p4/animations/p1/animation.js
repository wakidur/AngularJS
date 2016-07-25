/* 
 
 */

/*
(function(angular){
    'use strict';
    var myApp = angular.module('anchoringExample',['ngAnimate', 'ngRoute']);
        myApp.config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/', {
                templateUrl : 'home.html',
                controller: 'HomeController as home'
            });
            $routeProvider.when('/profile/:id',{
                templateUrl:'profile.html',
                controller: 'ProfileController as profile'
            });
        }]);
        myApp.run(['$rootScope', function($rootScope){
            $rootScope.recodes = [
                {id:1, title: "Miss Beulah Roob"},
                {id:2, title: "Trent Morissette"},
                {id:3, title: "Miss Ava Pouros"},
                {id:4, title: "Rod Rice"},
                {id:5, title: "Abdul Rice"},
                {id:6, title: "Laurie Rutherford sr."},
                {id:7, title: "Nakis McLaughlin"},
                {id:8, title: "Jordo Blanda DVM"},
                {id:9, title: "Rhoda Hand"},
                {id:10, title: "Miss Beulah Roob"},
                {id:11, title: "Alexandrea Sauer"}
            ];
        }]);
        myApp.controller('HomeController',[function(){
             //console.log("using HomeController");
        }]);
        myApp.controller('ProfileController',['$rootScope','$routeParams', function($rootScope, $routeParams){
                var index = parseInt($routeParams.id, 10);
                var record = $rootScope.recodes[index - 1];
                this.title  = record.title;
                this.id = record.id;
                console.log("hello");
        }]);
    
       
})(window.angular);





*/



/*



(function(angular) {
  'use strict';
angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    });
    $routeProvider.when('/profile/:id', {
      templateUrl: 'profile.html',
      controller: 'ProfileController as profile'
    });
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.records = [
      { id:1, title: "Miss Beulah Roob" },
      { id:2, title: "Trent Morissette" },
      { id:3, title: "Miss Ava Pouros" },
      { id:4, title: "Rod Pouros" },
      { id:5, title: "Abdul Rice" },
      { id:6, title: "Laurie Rutherford Sr." },
      { id:7, title: "Nakia McLaughlin" },
      { id:8, title: "Jordon Blanda DVM" },
      { id:9, title: "Rhoda Hand" },
      { id:10, title: "Alexandrea Sauer" }
    ];
  }])
  .controller('HomeController', [function() {
    //empty
  }])
  .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
    var index = parseInt($routeParams.id, 10);
    var record = $rootScope.records[index - 1];

    this.title = record.title;
    this.id = record.id;
  }]);
})(window.angular);


*/








(function(angular) {
  'use strict';
angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    })
    .when('/profile/:id', {
      templateUrl: 'profile.html',
      controller: 'ProfileController as profile'
    })
    .otherwise('/');
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.records = [
      { id:1, title: "Miss Beulah Roob" },
      { id:2, title: "Trent Morissette" },
      { id:3, title: "Miss Ava Pouros" },
      { id:4, title: "Rod Pouros" },
      { id:5, title: "Abdul Rice" },
      { id:6, title: "Laurie Rutherford Sr." },
      { id:7, title: "Nakia McLaughlin" },
      { id:8, title: "Jordon Blanda DVM" },
      { id:9, title: "Rhoda Hand" },
      { id:10, title: "Alexandrea Sauer" }
    ];
  }])
  .controller('HomeController', [function() {
    //empty
  }])
  .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
    var index = parseInt($routeParams.id, 10);
    var record = $rootScope.records[index - 1];

    this.title = record.title;
    this.id = record.id;
  }]);
})(window.angular);


