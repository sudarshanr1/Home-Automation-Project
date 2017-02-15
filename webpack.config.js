var path = require('path');
module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    start: 'node server.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      WaterImage: 'app/img/cloud.png',
      TemperatureImage: 'app/img/thermometer.png',
      ScreenImage: 'app/img/curtain.jpg',
      BackgroundImg: 'app/img/background.jpg',
      Main: 'app/components/main.js',
      MainView:'app/view/main.html',
      ControlPanel:'app/components/controlPanel.js',
      ControlPanelView:'app/view/controlPanel.html',
      Bulb: 'app/components/bulb.js',
      BulbView: 'app/view/bulb.html',
      Gallery: 'app/components/gallery.js',
      GalleryView: 'app/view/gallery.html',
      WaterPlant: 'app/components/waterPlant.js',
      WaterPlantView: 'app/view/waterPlant.html',
      Temperature: 'app/components/temperature.js',
      TemperatureView: 'app/view/temperature.html',
      Screen: 'app/components/screen.js',
      ScreenView: 'app/view/screen.html',
      HomeAutomationService: 'app/service/homeAutomationService.js',
      HomeAutomationDataService: 'app/service/homeAutomationDataService.js',
      HomeAutomationConstants: 'app/service/homeAutomationConstants.js',
      HomeAutomationStyles: 'app/style/HomeAutomation.css'
    },
    extensions: ['', '.js'],
    module: {
      loaders: [
            {
            test: /\.html$/,
            loaders: [
                "html?" + JSON.stringify({
                    attrs: ["img:src", "img:ng-src"]
                })
            ]},
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader'}
        ],
      exclude: /(node_modules)/
    }
  }
};
