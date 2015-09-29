var argv = require('yargs').argv;

module.exports = function (config) {

  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "src/main/javascript/lib/**/*.js",
      "src/test/javascript/**/*.js"
    ],
    exclude: [],
    preprocessors: {
      "src/main/javascript/**/*.js": ["babel"],
      "src/test/javascript/**/*.js": ["babel"]
    },
    babelPreprocessor: {
      options: {
        modules: "ignore"
      }
    },
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
