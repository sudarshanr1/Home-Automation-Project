var angular = require('angular');
angular.module('app').service('HomeAutomationDataService', function ($http, $q) {

    /* Gets photos from server*/
    this.getInitialPhotos = function(){
  		var url = "mock-data/photos.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    /* Gets light status from server*/
    this.getInitialLightStatus = function(){
  		var url = "mock-data/light-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    /* Gets curtain status from server*/
    this.getInitialCurtainStatus = function() {
  		var url = "mock-data/curtain-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    /* Gets temperature from server*/
    this.getInitialTemperature = function() {
  		var url = "mock-data/temperature.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    /* Gets water status from server*/
    this.getInitialWaterPlantStatus = function() {
  		var url = "mock-data/water-plant-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    /* Gets gallery status from server*/
    this.getInitialGalleryStatus = function() {
  		var url = "mock-data/gallery-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    return this;

});
