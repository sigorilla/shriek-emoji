"use strict";

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

var onError = function(err) {
  console.error(err);
}

var path = {
  MINIFIED_OUT: 'react-emoji.js',
  DEST_BUILD: 'dist',
  ENTRY_POINT: 'react-emoji.jsx'
};


gulp.task('default', ['build']);

// react components

gulp.task('build', function () {
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .on('error', function (err) {console.log(err);})
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});
