'use strict';
/*jslint node: true */

// Convert `.scss` files to `.css`
module.exports = {
  options: {
    style: 'expanded',
    loadPath: 'app/'
  },
  build: {
    files: {
      'tmp/css/src/style.css': 'app/css/style.scss'
    }
  }
};
