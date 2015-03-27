'use strict';
/*jslint node: true */

module.exports = function(grunt) {
  grunt.registerTask(
    'build',
    'Build the application into the ./dist folder.',
    function() {
      grunt.task.run([
        'clean:build',
        'mkdir:build',
        // CSS
        'rsync:cssVendorsToTmp',
        'sass:build',
        'concat:cssBuild',
        'autoprefixer:build',
        'cssmin:build',
        'rsync:cssTmpToDist',
        // JavaScript
        'rsync:jsVendorsToTmp',
        'rsync:jsToTmp',
        'concat:jsBuild',
        'uglify:build',
        'rsync:jsTmpToDist',
        // HTML
        'rsync:htmlAppToTmp',
        'htmlmin:build',
        'rsync:htmlTmpToDist',

      ]);
    });
};
