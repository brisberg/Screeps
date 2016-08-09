var gulp = require('gulp'),
    screeps = require('gulp-screeps'),
    replace = require('gulp-replace'),
    gmatch = require('gulp-match'),
    notify = require('gulp-notify'),
    map = require('map-stream'),
    credentials = require('./credentials.js');

var condition = /require\('.*'\)/g;

gulp.task('replace', function() {
  gulp.src('./src/**/*.js')
    .pipe(map(function (file, cb) {
      var match = gmatch(file, condition, null);
      if (match) {
        gulp.notify(match);
      }
      cb(null, file);
    }))
    .pipe(replace(re, 'test'))
    .pipe(gulp.dest('./dist2'));
});
