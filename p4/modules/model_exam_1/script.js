(function(angular){
    'use strict';
        angular.module('xmpl.directive',[]);
        angular.module('xmpl.filter',[]); 
        
    var xmpl =  angular.module('xmpl.service', []);
        xmpl.value('greeter', {
            salutation : "Hello",
            localize : function(localization){
                this.salutation = localization.salutation;
            },
            greet : function(name) {
                return this.salutation + ' '  + name + ' ! ';
            }
        });
        xmpl.value('user', {
            load : function(name) {
                this.name = name;
            }
        });
        
        //angular.module('xmpl.directive',[]);
        //angular.module('xmpl.filter',[]);
    
    var mainApp = angular.module('xmpl',['xmpl.service','xmpl.directive','xmpl.filter']);
        mainApp.run(function(greeter, user){
            // this is effectively part of the main method initialization code
            greeter.localize({
                salutation : 'Bonjour'
            });
            user.load('World');
        });
        mainApp.controller('XmplController', ['$scope','greeter','user',function($scope,greeter,user){
            $scope.greeting = greeter.greet(user.name);

        }])
})(window.angular)


