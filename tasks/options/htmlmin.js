'use strict';
/*jslint node: true */

// Minify HTML files
module.exports = {
  options: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeCommentsFromCDATA: true,
    removeOptionalTags: true,
    minifyJS: true
  },
  build: {
    files: [{
      expand: true,
      cwd: 'tmp/html/src/',
      src: '*.html',
      dest: 'tmp/html/dist/'
    }]
  }
};
