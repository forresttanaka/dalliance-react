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

        serve: {
            options: {
                port: 9000
            }
        },

        watch: {
            js: {
                files: [
                    'app/**/*.js'
                ],
                tasks: ['browserify']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'build/bundle.js',
                    '*.html'
                ]
            }
        }

    });
 
    // Load plug-ins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');

    // define tasks
    grunt.registerTask('default', [
        'browserify'
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);
};
