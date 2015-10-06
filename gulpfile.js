"use strict";

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');

var onError = function(err) {
  console.error(err);
}

var path = {
  MINIFIED_OUT_JS: 'react-emoji.js',
  MINIFIED_OUT_CSS: 'react-emoji.css',
  DEST_BUILD: 'dist',
  ENTRY_POINT: 'src/react-emoji.jsx',
  SASS: 'src/react-emoji.sass'
};


gulp.task('default', ['build', 'sass']);

// react components

gulp.task('build', function () {
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .on('error', function (err) {console.log(err);})
    .bundle()
    .pipe(source(path.MINIFIED_OUT_JS))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('sass', function () {
  return gulp.src('src/react-emoji.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({ browsers: ['last 2 version'] }))
    .pipe(nano())
    .pipe(gulp.dest(path.DEST_BUILD));
});
