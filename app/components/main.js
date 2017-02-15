var angular = require('angular');
angular.module('app', []).component('mainComponent', {
    template: require('html!MainView'),
    controller: function() {
         _this = this;
         _this.backgroundImg = require('url!BackgroundImg');
    }
});
