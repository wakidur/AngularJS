(function(angular) {
    'use strict';
    angular.module('finance2',[])
        .factory('currencyConverter', function(){
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRate = {
                USD : 1,
                EUR : 0.07,
                CNY : 6.09
            };
            var convert = function ( amount, inCurr, outCurr) {
                return amount * usdToForeignRate[outCurr] / usdToForeignRate[inCurr];
            };
            return {
                currencies : currencies,
                convert : convert
            }
        });
        
        
        
        
//        'use strict';
//angular.module('finance2', [])
//  .factory('currencyConverter', function() {
//    var currencies = ['USD', 'EUR', 'CNY'];
//    var usdToForeignRates = {
//      USD: 1,
//      EUR: 0.74,
//      CNY: 6.09
//    };
//    var convert = function (amount, inCurr, outCurr) {
//      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
//    };
//
//    return {
//      currencies: currencies,
//      convert: convert
//    };
//  });

})(window.angular);