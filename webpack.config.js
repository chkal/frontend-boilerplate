var path = require("path");
var argv = require('yargs').argv;

if (!argv.dest) {
  throw Error("Please use --dest to set a target directory");
}

module.exports = {
  entry: {
    index: "./src/main/javascript/index.entry.js"
  },
  output: {
    path: path.join(argv.dest, "js"),
    filename: "[name].js"
  },
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
    }, {
      test: /\.hb$/,
      exclude: /node_modules/,
      loader: "handlebars-loader"
    }]
  },
  devServer: {
    publicPath: "/js/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
