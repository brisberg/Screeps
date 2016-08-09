var gulp = require('gulp');
var screeps = require('gulp-screeps');
var rename = require('gulp-rename');
var credentials = require('./config/screeps-creds.js');

gulp.task('screeps', function() {
  gulp.src('./src/**/*.js', { base: './src' })
    .pipe(rename( function(path) {
      path.basename = path.dirname.replace('/', '.') + '.' + path.basename;
    }))
    .pipe(screeps(credentials));
});
