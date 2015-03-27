'use strict';
/*jslint node: true */

module.exports = function(grunt) {
  grunt.registerTask(
    'build',
    'Build the application into the ./dist folder.',
    function() {
      grunt.task.run([
        'mkdir:build',
        // HTML
        'rsync:htmlAppToTmp',
        'htmlmin:build',
        'rsync:htmlTmpToDist'
      ]);
    });
};
