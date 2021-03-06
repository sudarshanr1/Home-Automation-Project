var angular = require('angular');
angular.module('app').component('waterPlant', {
    template: require('html!WaterPlantView'),
    controller: function(HomeAutomationService) {
      var _this = this;
      _this.waterImg = require('url!WaterImage');

      /* Gets water status*/
      _this.waterPlant = function() {
        return !HomeAutomationService.isWaterButtonClicked();
      }
    }
});
