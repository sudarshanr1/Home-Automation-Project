var angular = require('angular');
angular.module('app').component('gallery', {
    template: require('html!GalleryView'),
    controller: function(HomeAutomationService) {
         var _this = this;

         /* Gets photos from server*/
          _this.photos = function() {
            return HomeAutomationService.getInitialPhotos();
          }

          /* show/hide gallery*/
          _this.showGallery = function() {
            return !HomeAutomationService.isGalleryButtonClicked();
          }
    }
});
