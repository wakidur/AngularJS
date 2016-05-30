/*if you write a custom directive you use ng-ransclude in the directive template to make the point where your want to instrt the contents ot the element.*/
        
// Full example :
 
 /*
  * If you put this in your markup
<body ng-app="myApp">
    <div class="AAA">
        <hero name="superman">Stuff inside the custom directive</hero>
    </div>
</body>
*/
//jscript.js
angular.module('myApp', []).directive('hero', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: { name:'@' },
      template: '<div>' +
                  '<div>{{name}}</div><br>' +
                  '<div ng-transclude></div>' +
                '</div>'
    };
  });