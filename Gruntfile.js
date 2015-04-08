module.exports = function(grunt) {

    'use strict';

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    //More later …

    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            compile: {
                options: {
                    outputSourceFiles: true
                },
                src: 'src/less/application.less',
                dest: 'dist/css/application.css'
            }
        },

        cssmin: {
            minify: {
                src: 'dist/css/application.css',
                dest: 'dist/css/application.min.css'
            }
        },

        jshint: {
            beforeopt: ['src/js/**/*.js']
        },

        watch: {
            css: {
                files: ['src/less/application.less', 'src/less/variables.less'],
                tasks: ['less', 'cssmin']
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['requirejs']
            }
        },

        copy: {
            main: {
                files: [{expand: true, 
                        flatten: true,
                        src: ['bower_components/bootstrap/dist/fonts/**'],
                        dest: 'dist/fonts/',
                        filter: 'isFile'}]
            }
        },

        connect: {
            server: {
                options: {
                    hostname: "127.0.0.1",
                    port: 9292,
                    base: '.',
                },
            },
        },

        mocha_phantomjs: {
            test: {
                options: {
                    urls: ['http://localhost:9292/test/test.html'],
                },
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "src/js/config.js",
                    include: ['bower_components/almond/almond', 'src/js/main', 'src/js/routers/app-router'],
                    out: "dist/js/ssmmfm.js"
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/js/app.min.js': ['dist/js/app.js']
                }
            }
        }

    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'cssmin', 'copy', 'requirejs']);
    grunt.registerTask('test', ['connect', 'mocha_phantomjs']);
};