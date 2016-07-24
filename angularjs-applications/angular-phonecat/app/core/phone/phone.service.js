(function(angular){
  'use strict';
    angular.module('corePhone').
        factory( 'Phone', [ '$resource', function( $resource ) { 
            return $resource(
                'phones/:phoneId.json', 
<<<<<<< HEAD
                {}, {  query: {
                            method: 'GET',
                            params: {
                                phoneId: 'phones'
                            },
                            isArray: true
=======
                {}, 
                {
                    query: {
                      method: 'GET',
                      params: {phoneId: 'phones'},
                      isArray: true
>>>>>>> 312f4add06738dd6c17afc16838feafc70183686
                    }
                }
            );
        }
   ]);  
})(window.angular);
<<<<<<< HEAD
/*
syntax

$resource(url, [paramDefaults], [actions], options);
$resource('http://example.com/:id.json');


// ...defining the `Hotel` resource...
var Hotel = $resource('/api/hotel/:id', {id: '@id'}, {
  // Let's make the `query()` method cancellable
  query: {method: 'get', isArray: true, cancellable: true}
});



*/
=======

>>>>>>> 312f4add06738dd6c17afc16838feafc70183686
