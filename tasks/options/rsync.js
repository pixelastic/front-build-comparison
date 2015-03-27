'use strict';
/*jslint node: true */

// Intelligently sync (copy) files, with a diff algorithm
module.exports = {
  options: {
    recursive: true,
    args: [
      '--archive',
      '--prune-empty-dirs'
    ]
  },

  htmlAppToTmp: {
    options: {
      src: 'app/*.html',
      dest: 'tmp/html/src'
    }
  },
  htmlTmpToDist: {
    options: {
      src: 'tmp/html/dist/*.html',
      dest: 'dist'
    }
  },

  cssVendorsToTmp: {
    options: {
      src: 'app/css/vendors/*.css',
      dest: 'tmp/css/src'
    }
  },
  cssTmpToDist: {
    options: {
      src: 'tmp/css/dist/main.css',
      dest: 'dist'
    }
  },

  jsVendorsToTmp: {
    options: {
      src: 'app/js/vendors/*.js',
      dest: 'tmp/js/src'
    }
  },
  jsToTmp: {
    options: {
      src: 'app/js/*.js',
      dest: 'tmp/js/src'
    }
  },
  jsTmpToDist: {
    options: {
      src: 'tmp/js/dist/main.js',
      dest: 'dist'
    }
  }

};
