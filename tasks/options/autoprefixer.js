'use strict';
/*jslint node: true */

// Adds vendor prefixes to CSS files using caniuse.com database
module.exports = {
  options: {
    browsers: ['last 3 versions']
  },
  build: {
    expand: true,
    cwd: 'tmp/css/dist',
    src: 'main.css',
    dest: 'tmp/css/dist'
  }
};
