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
        // HTML
        // 'rsync:htmlAppToTmp',
        // 'htmlmin:build',
        // 'rsync:htmlTmpToDist',
        // CSS
        'rsync:cssVendorsToTmp',
        'sass:build',
        'concat:cssBuild',
        'autoprefixer:build',
        'cssmin:build',
        'rsync:cssTmpToDist'
      ]);
    });
};
