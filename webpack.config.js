module.exports = {
  entry: {
    index: "./src/main/javascript/index.js"
  },
  output: {
    path: "./target/generated-web-resources/js/",
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
      loader: "babel",
      query: {
        presets: ["es2015", "es2016"]
      }
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader"
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
