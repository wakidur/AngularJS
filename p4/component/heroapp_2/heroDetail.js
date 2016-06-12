(function(angular) {
  'use strict';
function HeroDetailController() {
  var ctrl = this;

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
  };
}

angular.module('heroApp').component('heroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});
})(window.angular);


//<div>
//  Name: {{$ctrl.hero.name}}<br>
//  Location: <editable-field field-value="$ctrl.hero.location" field-type="text" on-update="$ctrl.update('location', value)"></editable-field><br>
//  <button ng-click="$ctrl.onDelete({hero: $ctrl.hero})">Delete</button>
//</div>


