var angular = require('angular');
angular.module('app').component('gallery', {
    template: require('html!GalleryView'),
    controller: function(HomeAutomationService) {
         var _this = this;
         
          _this.photos = function() {
            return HomeAutomationService.getInitialPhotos();
          }

          _this.showGallery = function() {
            return !HomeAutomationService.isGalleryButtonClicked();
          }
    }
});
