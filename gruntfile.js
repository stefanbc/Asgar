module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        clean: {
            build: {
                src: [
                    './assets/css/*'
                ]
            }
        },

        sass: {
            build: {
                options: {
                    style     : 'compressed',
                    sourcemap : 'none'
                },
                files: {
                    './assets/css/style.min.css' : './assets/scss/index.scss'
                }
            }
        },

        watch: {
            options: {
                atBegin: true,
                livereload: true
            },
            files: [
                './assets/scss/*.scss'
            ],
            tasks: ['clean:build', 'sass:build']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean:build', 'sass:build']);
};