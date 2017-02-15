var angular = require('angular');
angular.module('app').service('HomeAutomationService', function ($http, $q, HomeAutomationDataService) {
    var _this = this;
    _this.lightStatus;
    _this.galleryStatus;
    _this.isCurtainStatus;
    _this.waterStatus;
    _this.initialTemperature;
    _this.initialPhotos = [];

    _this.setInitialPhotos = function(){
      HomeAutomationDataService.getInitialPhotos().then(function(response){
        _this.initialPhotos = response.data.urls;
        console.log(_this.initialPhotos);
      });
    }
    _this.setInitialPhotos();

    _this.getInitialPhotos = function() {
      return _this.initialPhotos;
    }

    HomeAutomationDataService.getInitialLightStatus().then(function(response){
      _this.lightStatus = response.data.open;
    });

    HomeAutomationDataService.getInitialCurtainStatus().then(function(response){
      _this.curtainOpen = response.data.open;
    });

    HomeAutomationDataService.getInitialWaterPlantStatus().then(function(response){
      _this.waterStatus = response.data.open;
    });

    HomeAutomationDataService.getInitialGalleryStatus().then(function(response){
      _this.galleryStatus = response.data.open;
    });

    HomeAutomationDataService.getInitialTemperature().then(function(response){
      _this.initialTemperature = response.data.temperature;
    });

    _this.setTemperature = function(temperature) {
       _this.initialTemperature = temperature;
    }

    _this.getTemperature = function() {
        return _this.initialTemperature;
    }

    _this.setLightButtonClicked = function(lightStatus) {
      _this.lightStatus = lightStatus;
    }

    _this.isLightButtonClicked = function() {
      return _this.lightStatus;
    }

    _this.setShowGalleryClicked = function(galleryStatus) {
      _this.galleryStatus = galleryStatus;
    }

    _this.isGalleryButtonClicked = function() {
      return _this.galleryStatus;
    }

    _this.setWaterButtonClicked = function(waterStatus) {
      _this.waterStatus = waterStatus;
    }

    _this.isWaterButtonClicked = function() {
      return _this.waterStatus;
    }

    _this.getCurtainStatus = function() {
      return _this.isCurtainStatus;
    }

    _this.setCurtainStatus = function(isCurtainStatus) {
      _this.isCurtainStatus = isCurtainStatus;
    }

    _this.getInitialLightStatus = function() {
      return _this.lightStatus;
    }

    _this.getInitialGalleryStatus = function() {
      return _this.galleryStatus;
    }

    _this.getInitialWaterStatus = function() {
      return _this.waterStatus;
    }

    _this.getInitialCurtainStatus = function() {
      return _this.isCurtainStatus;
    }

    return _this;

});
