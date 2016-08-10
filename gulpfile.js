var gulp     = require('gulp');
var screeps  = require('gulp-screeps');
var rename   = require('gulp-rename');
var merge    = require('merge-stream');
var minimist = require('minimist');

var config = require('./config/screeps-config.js');

var knownOptions = {
    string: 'branch',
    boolean: 'ptr',
    default: config
};

config = minimist(process.argv.slice(2), knownOptions);

gulp.task('screeps', function() {
  merge(gulp.src(config.project_path + '/**/*.js', { base: config.project_path }),
        gulp.src('./common/**/*.js', { base: './common' }))
    .pipe(rename( function(path) {
      path.basename = path.dirname.replace('/', '.') + '.' + path.basename;
    }))
    .pipe(screeps(config));
});
