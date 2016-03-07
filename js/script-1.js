/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular){
    'use strict';
    angular.module('invoice1', []).controller('InvoiceController', function(){
        this.qty = 1;
        this.cost = 2;
        this.inCurr = "BANG",
        this.currencies = ['USD', 'EUR', 'CNY', 'BANG'];
        this.usdToForeinRates = {
            USD : 1,
            EUR : 0.74,
            CNY : 6.09,
            BANG : 80
        };
        this.total = function total( outCurr ) {
            return this.convertCurrency( this.qty * this.cost, this.inCurr , outCurr) ;      
        };
        this.convertCurrency = function convertCurrency( amount , inCurr, outCurr) {
            return amount * this.usdToForeinRates[outCurr] / this.usdToForeinRates[inCurr];
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        }
        
    });
})(window.angular);

//example 2
(function(angular){
    'use strict';
    angular.module('finance2' , []).factory('currencyConverter', function(){
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {
            USD : 1,
            EUR : 0.74,
            CNY : 6.09
        };
        var convert = function( amount , inCurr , outCurr ) {
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        };
        return {
            currencies : currencies,
            convert: convert
        };
        
    });
    
})(window.angular);




















//(function(angular) {
//  'use strict';
//angular.module('invoice1', [])
//  .controller('InvoiceController', function() {
//    this.qty = 1;
//    this.cost = 2;
//    this.inCurr = 'EUR';
//    this.currencies = ['USD', 'EUR', 'CNY','Bang'];
//    this.usdToForeignRates = {
//      USD: 1,
//      EUR: 0.74,
//      CNY: 6.09,
//      Bang: 80,
//    };
//    this.total = function total(outCurr) {
//      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
//    };
//    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
//      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
//    };
//    this.pay = function pay() {
//      window.alert("Thanks!");
//    };
//  });
//})(window.angular);
