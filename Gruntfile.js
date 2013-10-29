module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            pre: [
                'out/css/styles.min.css',
                'out/js/scripts.js'
            ],
            post: [
                'out/css/bootstrap.css',
                'out/css/github.css',
                'out/css/angular-cache.css',
                'out/css/main.css',
                'out/css/styles.css',
                'out/js/bootstrap.js',
                'out/js/jquery.js',
                'out/api/',
                'out/configuration/',
                'out/guide/',
                'out/index/',
                'out/installation/'
            ]
        },
        cssmin: {
            combine: {
                files: {
                    'out/css/styles.css': [
                        'src/files/css/main.css'
                    ]
                }
            },
            minify: {
                expand: true,
                cwd: 'out/css/',
                src: ['styles.css'],
                dest: 'out/css/',
                ext: '.min.css'
            }
        },
        uglify: {
            default: {
                files: {
                    'out/js/scripts.js': ['src/files/js/bootstrap.js', 'src/files/js/jquery']
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean:pre', 'cssmin', 'uglify', 'clean:post']);

};