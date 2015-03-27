'use strict';
/*jslint node: true */

var fs = require('fs');

function loadConfig(path) {
  var config = {};

  fs.readdirSync(path).forEach(function(file) {
    var key = file.replace(/\.js$/, '');
    config[key] = require(path + file);
  });

  return config;
}

module.exports = function(grunt) {
  var config = {};
  grunt.util._.extend(config, loadConfig(__dirname + '/tasks/options/'));

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('tasks');
  grunt.config.init(config);
};
