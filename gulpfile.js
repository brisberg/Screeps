var gulp = require('gulp');
var screeps = require('gulp-screeps');
var rename = require('gulp-rename');

var credentials = require('./config/screeps-creds.js');
var minimist = require('minimist');

var knownOptions = {
    string: 'branch',
    boolean: 'ptr',
    default: credentials
};

credentials = minimist(process.argv.slice(2), knownOptions);

gulp.task('screeps', function() {
  gulp.src('./src/**/*.js', { base: './src' })
    .pipe(rename( function(path) {
      path.basename = path.dirname.replace('/', '.') + '.' + path.basename;
    }))
    .pipe(screeps(credentials));
});
