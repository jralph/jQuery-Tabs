module.exports = (grunt) ->

    # Load Libraries.
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    # Setup grunt config.
    grunt.initConfig

        # Register package.json file.
        pkg: grunt.file.readJSON 'package.json'

        # Register uglify task.
        uglify:
            options:
                compress:
                    drop_console: true
                mangle: true
            build:
                files:
                    'dist/js/jquery.tabs.min.js': ['build/js/**/*.js']

        # Register watch task.
        watch:
            uglify:
                files: 'build/js/**/*.js'
                tasks: ['uglify']

    # Register default task.
    grunt.registerTask 'default', [
        'uglify',
        'watch'
    ]

    # Register a simple build task when a watch is not needed.
    grunt.registerTask 'build', [
        'uglify'
    ]