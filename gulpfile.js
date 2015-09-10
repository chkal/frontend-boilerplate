var gulp = require("gulp");
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var rename = require("gulp-rename");

var paths = {
  js: "./src/main/webapp/**/*.js",
  css: "./src/main/webapp/**/*.less",
  out: "./target/es6-webapp/"
};

gulp.task("js", function () {
  gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/\.es6/, "");
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.out));
});

gulp.task("css", function () {
  gulp.src(paths.css)
    .pipe(less())
    .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function () {
  gulp.watch(paths.js, ["js"]);
  gulp.watch(paths.css, ["css"]);
});

gulp.task("default", ["js", "css"]);

