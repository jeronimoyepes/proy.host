'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Compilar los SCSS
gulp.task('scss', function () {
	return gulp.src('./scss/**/*.scss')
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(gulp.dest('production/css'))
});

// Compilar los SCSS cada vez que haya cambios en los archivos
gulp.task('scss:watch', function () {
	gulp.watch('./scss/**/*.scss', ['scss']);
});

// Revisión de los archivos Javascript
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// "Minificar"(comprimir) los archivos de javascript
gulp.task('compress', function (cb) {
  pump([
        gulp.src('pre-js/*.js'),
        uglify(),
        gulp.dest('production/js')
    ],
    cb
  );
});

gulp.task('build', ['compress', 'lint', 'scss'], function(){
	console.log('Build complete');
})
