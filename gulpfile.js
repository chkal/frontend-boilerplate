var gulp = require("gulp");
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var rename = require("gulp-rename");

if (!argv.dest) {
  throw Error("Please use --dest to set a target directory");
}

var paths = {
  js: "./src/main/webapp/**/*.es6.js",
  css: "./src/main/webapp/**/*.less"
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
    .pipe(gulp.dest(argv.dest));
});

gulp.task("css", function () {
  gulp.src(paths.css)
    .pipe(less())
    .pipe(gulp.dest(argv.dest));
});

gulp.task("watch", function () {
  gulp.watch(paths.js, ["js"]);
  gulp.watch(paths.css, ["css"]);
});

gulp.task("default", ["js", "css"]);
