'use strict';
/*jslint node: true */

// Creates directory structure
module.exports = {
  build: {
    options: {
      create: [
        'tmp/html',
        'tmp/html/src',
        'tmp/html/dist',
        'tmp/js',
        'dist/',
        'dist/css',
        'dist/js'
      ]
    }
  }
};
