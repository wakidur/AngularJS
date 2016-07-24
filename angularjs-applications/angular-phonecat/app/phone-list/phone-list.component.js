(function(angular){
<<<<<<< HEAD
    'use strict';

    // Register `phoneList` component, along with its associated controller and template
    angular.module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/phone-list.template.html',
            controller: ['Phone', function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
                }
            ]
    });
})(window.angular);


=======
'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
})(window.angular);
>>>>>>> 312f4add06738dd6c17afc16838feafc70183686
