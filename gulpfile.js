var gulp = require("gulp");
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var named = require("vinyl-named");
var webpackstream = require("webpack-stream");
var path = require("path");
var plumber = require("gulp-plumber");
var filter = require("gulp-filter");

if (!argv.dest) {
  throw Error("Please use --dest to set a target directory");
}

var paths = {
  js: "./src/main/javascript/**/*.js",
  hb: "./src/main/javascript/**/*.hb",
  less: "./src/main/less/**/*.less"
};

gulp.task("js", function () {
  gulp.src(paths.js)
    .pipe(plumber(notify.onError("Error: <%= error.message%>")))
    .pipe(filter("*.entry.js"))
    .pipe(named())
    .pipe(webpackstream({
      bail: true,
      output: {
        filename: "[name].js"
      },
      devtool: "source-map",
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel"
        }, {
          test: /\.hb$/,
          exclude: /node_modules/,
          loader: "handlebars-loader"
        }]
      }
    }))
    .pipe(gulp.dest(path.join(argv.dest, "js")));
});

gulp.task("less", function () {
  gulp.src(paths.less)
    .pipe(plumber(notify.onError("Error: <%= error.message%>")))
    .pipe(less())
    .pipe(gulp.dest(path.join(argv.dest, "css")));
});

gulp.task("watch", function () {
  gulp.watch(paths.js, ["js"]);
  gulp.watch(paths.hb, ["js"]);
  gulp.watch(paths.less, ["less"]);
});

gulp.task("default", ["js", "less"]);
