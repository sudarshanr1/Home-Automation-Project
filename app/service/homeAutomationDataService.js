var angular = require('angular');
angular.module('app').service('HomeAutomationDataService', function ($http, $q) {
    this.getInitialPhotos = function(){
  		var url = "mock-data/photos.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}
    this.getInitialLightStatus = function(){
  		var url = "mock-data/light-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}
    this.getInitialCurtainStatus = function() {
  		var url = "mock-data/curtain-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}
    this.getInitialTemperature = function() {
  		var url = "mock-data/temperature.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}
    this.getInitialWaterPlantStatus = function() {
  		var url = "mock-data/water-plant-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}
    this.getInitialGalleryStatus = function() {
  		var url = "mock-data/gallery-status.json";
  		var promise = $q.defer().promise;
  		promise = $http.get(url);
  		return promise;
  	}

    return this;

});
