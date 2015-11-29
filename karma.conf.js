var argv = require('yargs').argv;

module.exports = function (config) {

  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "src/test/javascript/**/*-spec.*"
    ],
    exclude: [],
    preprocessors: {
      "src/test/javascript/**/*-spec.*": ["webpack"]
    },
    webpack: {
      resolve: {
        modulesDirectories: [
          "node_modules",
          "src/main/javascript"
        ]
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel"
        }, {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        }]
      }
    },
    plugins: [
      require("karma-jasmine"),
      require("karma-webpack"),
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher")
    ],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["PhantomJS"],
    singleRun: true
  });

  // call karma with --dev to enable watch mode
  if (argv.dev) {
    config.set({
      autoWatch: true,
      browsers: ["Chrome"],
      singleRun: false
    });
  }

};
