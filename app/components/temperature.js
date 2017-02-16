var angular = require('angular');
angular.module('app').component('temperature', {
    template: require('html!TemperatureView'),
    controller: function(HomeAutomationService) {
      var _this = this;
      _this.thermometerImg = require('url!TemperatureImage');

      /* Gets Temperature */
      _this.temperature = function() {
        return HomeAutomationService.getTemperature()
      };
    }
});
