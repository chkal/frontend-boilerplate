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

if (!argv.dest) {
  throw Error("Please use --dest to set a target directory");
}

var paths = {
  js: "./src/main/javascript/**/*.js",
  jsPage: "./src/main/javascript/page/**/*.js",
  less: "./src/main/less/**/*.less"
};

function errorHandler(error) {
  console.log(error.toString());
  notify(error.toString());
  this.emit('end');
}

gulp.task("js", function () {
  gulp.src(paths.jsPage)
    .pipe(named())
    .pipe(webpackstream({
      output: {
        filename: "[name].js"
      },
      devtool: "source-map",
      module: {
        loaders: [{
          test: /\.js$/,
          loader: "babel"
        }]
      }
    }))
    .on("error", notify.onError(function (error) {
      return error.message;
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/\.es6/, "");
    }))
    .pipe(gulp.dest(argv.dest + "/js"));
});

gulp.task("less", function () {
  gulp.src(paths.less)
    .pipe(less())
    .on("error", notify.onError(function (error) {
      return error.message;
    }))
    .pipe(gulp.dest(argv.dest + "/css"));
});

gulp.task("watch", function () {
  gulp.watch(paths.js, ["js"]);
  gulp.watch(paths.less, ["less"]);
});

gulp.task("default", ["js", "less"]);
