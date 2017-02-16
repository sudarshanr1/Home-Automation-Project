var angular = require('angular');
angular.module('app').service('HomeAutomationConstants', function () {
    var _this = this;
    
    _this.Constants = {
      ON: 'ON',
      OFF: 'OFF',
      OPEN: 'OPEN',
      CLOSED: 'CLOSED'
    }

    return _this;

});
