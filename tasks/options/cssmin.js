'use strict';
/*jslint node: true */

// Minify CSS files
module.exports = {
  options: {
    root: 'app'
  },
  build: {
    files: {
      'tmp/css/dist/main.css': 'tmp/css/dist/main.css'
    }
  }
};
