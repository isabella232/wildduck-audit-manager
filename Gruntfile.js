'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            all: ['lib/**/*.js', 'soutes/**/*.js', 'server.js', 'Gruntfile.js']
        }
    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-eslint');

    // Tasks
    grunt.registerTask('default', ['eslint']);
};
