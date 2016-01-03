"use strict";

var gulp = require('gulp'),
  purescript = require('gulp-purescript'),
  webpack = require('webpack-stream');

var sources = [
  'src/**/*.purs',
  'bower_components/purescript-*/src/**/*.purs'
];

var foreigns = [
  'bower_components/purescript-*/src/**/*.js'
];

gulp.task('make', function() {
  return purescript.psc({ src: sources, ffi: foreigns });
});

gulp.task('prebundle', ['make'], function() {
  return purescript.pscBundle({
    src: 'output/**/*.js',
    output: 'dist/app.js',
    module: 'Main',
    main: 'Main'
  });
});

gulp.task('bundle', ['prebundle'], function() {
  return gulp.src("dist/app.js")
    .pipe(webpack({
      resolve: { modulesDirectories: ['node_modules'] },
      output: { filename: 'app.js' }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['bundle']);