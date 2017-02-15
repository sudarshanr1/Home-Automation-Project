var angular = require('angular');
angular.module('app').component('screen', {
    template: require('html!ScreenView'),
    controller: function(HomeAutomationService) {
      var _this = this;
      _this.screenImg = require('url!ScreenImage');
      _this.screenStatus = function() {
        return HomeAutomationService.getCurtainStatus();
      };
    }
});
