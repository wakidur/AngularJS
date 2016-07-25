(function(angular){
  'use strict';
    angular.module('corePhone').
        factory( 'Phone', [ '$resource', function( $resource ) { 
            return $resource(
                'phones/:phoneId.json', 

                {}, {  query: {
                            method: 'GET',
                            params: {
                                phoneId: 'phones'
                            },
                            isArray: true

                    }
                }
            );
        }
   ]);  
})(window.angular);
