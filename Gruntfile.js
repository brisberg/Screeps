module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        pkg: grunt.file.readJSON('config/screeps-creds.json'),
        screeps: {
            options: {
                email: '<%= pkg.email %>',
                password: '<%= pkg.password %>',
                branch: grunt.option('branch') || 'default',
                ptr: false
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}