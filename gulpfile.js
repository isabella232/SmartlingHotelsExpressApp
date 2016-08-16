/**
 * Created by admin on 8/16/16.
 */

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('jsxgettext', shell.task([
    'jsxgettext -L ejs -p ./data/strings -o en.po ./views/**/*.ejs'
]));

gulp.task('default', ['jsxgettext']);