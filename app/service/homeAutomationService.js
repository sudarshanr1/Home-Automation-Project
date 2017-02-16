var angular = require('angular');
angular.module('app').service('HomeAutomationService', function ($http, $q, HomeAutomationDataService) {
    var _this = this;
    _this.lightStatus;
    _this.galleryStatus;
    _this.isCurtainStatus;
    _this.waterStatus;
    _this.initialTemperature;
    _this.initialPhotos = [];

    /* Sets photos data*/
    _this.setInitialPhotos = function(){
      HomeAutomationDataService.getInitialPhotos().then(function(response){
        _this.initialPhotos = response.data.urls;
        console.log(_this.initialPhotos);
      });
    }
    _this.setInitialPhotos();

    /* Gets photos*/
    _this.getInitialPhotos = function() {
      return _this.initialPhotos;
    }

    /* Gets initial light on/off status from server*/
    HomeAutomationDataService.getInitialLightStatus().then(function(response){
      _this.lightStatus = response.data.open;
    });

    /* Gets initial curtain status from server*/
    HomeAutomationDataService.getInitialCurtainStatus().then(function(response){
      _this.curtainOpen = response.data.open;
    });

    /* Gets initial water status from server*/
    HomeAutomationDataService.getInitialWaterPlantStatus().then(function(response){
      _this.waterStatus = response.data.open;
    });

    /* Gets initial gallery status from server*/
    HomeAutomationDataService.getInitialGalleryStatus().then(function(response){
      _this.galleryStatus = response.data.open;
    });

    /* Gets initial temperature from server*/
    HomeAutomationDataService.getInitialTemperature().then(function(response){
      _this.initialTemperature = response.data.temperature;
    });

    /* sets user desired temperature*/
    _this.setTemperature = function(temperature) {
       _this.initialTemperature = temperature;
    }

    /* gets user desired temoerature*/
    _this.getTemperature = function() {
        return _this.initialTemperature;
    }

    /* sets user desired light status*/
    _this.setLightButtonClicked = function(lightStatus) {
      _this.lightStatus = lightStatus;
    }

    /* gets user desired temperature*/
    _this.isLightButtonClicked = function() {
      return _this.lightStatus;
    }

    /* sets user desired gallery status*/
    _this.setShowGalleryClicked = function(galleryStatus) {
      _this.galleryStatus = galleryStatus;
    }

    /* gets user desired gallery*/
    _this.isGalleryButtonClicked = function() {
      return _this.galleryStatus;
    }

    /* sets user desired water status*/
    _this.setWaterButtonClicked = function(waterStatus) {
      _this.waterStatus = waterStatus;
    }
    /* gets user desired water status*/
    _this.isWaterButtonClicked = function() {
      return _this.waterStatus;
    }

    /* sets user desired curtain status*/
    _this.getCurtainStatus = function() {
      return _this.isCurtainStatus;
    }

    /* sets user desired curtain status*/
    _this.setCurtainStatus = function(isCurtainStatus) {
      _this.isCurtainStatus = isCurtainStatus;
    }

    /* sets user desired light status*/
    _this.getInitialLightStatus = function() {
      return _this.lightStatus;
    }

    /* sets initial gallery status*/
    _this.getInitialGalleryStatus = function() {
      return _this.galleryStatus;
    }

    /* gets initial water status*/
    _this.getInitialWaterStatus = function() {
      return _this.waterStatus;
    }

    /* gets initial curtain status*/
    _this.getInitialCurtainStatus = function() {
      return _this.isCurtainStatus;
    }

    return _this;

});
