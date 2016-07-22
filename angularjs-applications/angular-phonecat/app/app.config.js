(function (angular) {
    'use strict';
    angular.module('phonecatApp').
<<<<<<< HEAD
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/phones', {
                    template: '<phone-list></phone-list>'
                }).
                when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                }).
                otherwise('/phones');
        }
    ]);
})(window.angular);

/*
 * 
.config(['depProvider', function(depProvider) { 
        // ...
 }])
 
 */
=======
        config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider.
                    when('/phones', {
                        template: '<phone-list></phone-list>'
                    }).
                    when('/phones/:phoneId', {
                        template: '<phone-detail></phone-detail>'
                    }).
                    otherwise('/phones');
        }
    ]);
})(window.angular);
>>>>>>> 312f4add06738dd6c17afc16838feafc70183686
