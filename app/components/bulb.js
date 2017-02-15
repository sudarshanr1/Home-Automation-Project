var angular = require('angular');
angular.module('app').component('bulb', {
    template: require('html!BulbView'),
    controller: function(HomeAutomationService) {
         var _this = this;
         _this.bulbOn = function(){
           return !HomeAutomationService.isLightButtonClicked();
         }
    }
});
