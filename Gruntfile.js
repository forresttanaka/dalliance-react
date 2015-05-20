'use strict';
 
module.exports = function(grunt) {
 
    // configure grunt
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        browserify: {
            dist: {
                files: {
                    'build/bundle.js': [
                        'app/**/*.js'
                    ]
                },
                options: {
                    transform: [require('grunt-react').browserify]
                }
            },
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
        },

    });
 
    // Load plug-ins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-react');

    // define tasks
    grunt.registerTask('default', [
        'browserify'
    ]);
};
