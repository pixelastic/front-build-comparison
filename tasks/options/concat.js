'use strict';
/*jslint node: true */

// Concatenate JS and CSS files together
module.exports = {
  cssBuild: {
    src: [
      'tmp/css/src/bootstrap.min.css',
      'tmp/css/src/style.css'
    ],
    dest: 'tmp/css/dist/main.css'
  },
  jsBuild: {
    src: [
      'tmp/js/src/jquery.min.js',
      'tmp/js/src/*.js'
    ],
    dest: 'tmp/js/dist/main.js'
  }
};
