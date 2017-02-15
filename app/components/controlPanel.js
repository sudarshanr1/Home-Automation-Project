var angular = require('angular');
angular.module('app').component('controlPanel', {
    template: require('html!ControlPanelView'),
    controller: function(HomeAutomationService, HomeAutomationConstants) {
         _this = this;

         _this.lightOnOff = function() {
           return HomeAutomationService.getInitialLightStatus() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
         }

         _this.galleryShow = function() {
           return HomeAutomationService.getInitialGalleryStatus() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
         }
         _this.waterPoured = function() {
           return HomeAutomationService.getInitialGalleryStatus() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
         };

         _this.curtainStatus = function() {
           return !HomeAutomationService.getInitialCurtainStatus() ? HomeAutomationConstants.Constants.OPEN : HomeAutomationConstants.Constants.CLOSED;
         }

         _this.bulbButtonClicked = function() {
           HomeAutomationService.setLightButtonClicked(!HomeAutomationService.isLightButtonClicked());
           _this.lightOnOff = function() {
             return HomeAutomationService.isLightButtonClicked() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
           };
         }

         _this.galleryButtonClicked = function() {
           HomeAutomationService.setShowGalleryClicked(!HomeAutomationService.isGalleryButtonClicked());
           _this.galleryShow = function() {
             return HomeAutomationService.isGalleryButtonClicked() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
           }
         }

         _this.waterButtonClicked = function() {
           HomeAutomationService.setWaterButtonClicked(!HomeAutomationService.isWaterButtonClicked());
           _this.waterPoured = function() {
             return HomeAutomationService.isWaterButtonClicked() ? HomeAutomationConstants.Constants.OFF : HomeAutomationConstants.Constants.ON;
           }
         }

         _this.changeTemperature = function(increase) {
           if(increase) {
             var temperature = parseInt(HomeAutomationService.getTemperature());
             HomeAutomationService.setTemperature(++temperature);
           } else {
             var temperature = parseInt(HomeAutomationService.getTemperature());
             HomeAutomationService.setTemperature(--temperature);
           }
         }

         _this.curtainButtonClicked = function() {
             HomeAutomationService.setCurtainStatus(!HomeAutomationService.getCurtainStatus());
             _this.curtainStatus = function(){
               return !HomeAutomationService.getCurtainStatus() ? HomeAutomationConstants.Constants.OPEN : HomeAutomationConstants.Constants.CLOSED;
             }
         }
    }
});
