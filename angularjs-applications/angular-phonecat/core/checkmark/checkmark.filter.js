'use strict';

angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
     
      //return console.log(input);
      //return console.log("return input ? '\u2713' : '\u2718'" );
    };
  });
