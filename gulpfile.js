'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function () {
  setTimeout(function () {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["public/**/*.*", "views/**/*.*"],
      browser: "google-chrome",
      port: 7000,
    });
  }, 3000)
});

gulp.task('setup-secrets', function (cb) {
  exec('cp ../shared/.env .', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    ignore: [
      "node_modules/**",
      "public/**"
    ],
    exec: 'node --inspect',
    script: 'app.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});
