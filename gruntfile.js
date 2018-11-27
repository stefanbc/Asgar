module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        clean: {
            default: {
                src: [
                    './assets/css/**/*'
                ]
            }
        },

        sasslint: {
            options: {
                configFile: './.sass-lint.yml',
            },
            target: ['./assets/scss/**/*.scss']
        },

        sass: {
            default: {
                options: {
                    sourceMap : 'none',
                    implementation: sass
                },
                files: {
                    './assets/css/style.min.css' : './assets/scss/index.scss'
                }
            }
        },

        autoprefixer: {
            default: {
                options: { browsers : ['last 4 versions'] },
                files: {
                    './assets/css/style.min.css' : './assets/css/style.min.css'
                },
            },
        },

        cssmin: {
            default: {
                files: {
                    './assets/css/style.min.css' : './assets/css/style.min.css',
                    './assets/css/vendor.min.css': [
                        './node_modules/normalize.css/normalize.css',
                        './node_modules/skeleton.css/skeleton.css'
                    ]
                }
            }
        },

        watch: {
            options: {
                atBegin: true,
                livereload: true
            },
            styles: {
                files: ['./assets/scss/*.scss'],
                tasks: [
                    'clean',
                    'sasslint',
                    'sass',
                    'autoprefixer',
                    'cssmin'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'sasslint', 'sass', 'autoprefixer', 'cssmin']);
};