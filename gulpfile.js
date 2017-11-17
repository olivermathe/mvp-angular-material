const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-uglify');
const exec = require('gulp-exec');

const SRC_CODE = ['./app/**/*.js', './app/**/**/*.js', './app/shared/factories/*.js', './app/shared/directives/**/*.js', './app/shared/services/*.js', './app/shared/**/*.js']

gulp.task('default', ['execute']);

gulp.task('clean:temporary', () => {
    clean('./dist')
});

gulp.task('build:bundle', ['clean:temporary'], () => {
    gulp.src(SRC_CODE)
        .pipe(ngAnnotate())
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build:min', ['build:bundle'], () => {
    gulp.src(SRC_CODE)
        .pipe(concat('build.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify({ 'mangle': false }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('execute', ['build:min'], () => {
    gulp.src('./')
        .pipe(exec('node ./bin/www'))
});