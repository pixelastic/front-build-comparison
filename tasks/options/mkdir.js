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
        'tmp/css',
        'tmp/css/src',
        'tmp/css/dist',
        'tmp/js',
        'tmp/js/src',
        'tmp/js/dist',
        'dist/'
      ]
    }
  }
};
