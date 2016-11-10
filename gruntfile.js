
module.exports = function(grunt) {
 'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['node_modules/**']
      },
      source: {
        files: {
          src: ['src/javascript/**/*.js']
        }
      }
  },

    sass: {
      allStyles: {
        files: {
          'build/css/styles.css': 'src/sass/main.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // grunt.registerTask( 'default', ['jshint'] );
  grunt.registerTask('default', ['jshint', 'sass'] );
};
