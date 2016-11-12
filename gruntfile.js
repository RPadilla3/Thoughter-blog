
module.exports = function(grunt) {
 'use strict';

  grunt.initConfig({

    clean: [ '/build' ],

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
    },

  copy: {

    html: {
      files: [
        {
          expand: true,
          cwd: 'src/',
          src: [ 'index.html' ],
          dest: 'build/'
        }
      ]
    },

  vendorjs: {

    files: [
    {
        expand: true,
        cwd:'node_modules/jquery/dist',
        src: [ 'jquery.js' ],
        dest: 'build/js/'
      }
    ]
  }

},
  concat: {
    javascript: {
      src: ['src/javascript/**/*.js'],
      dest: 'build/js/thought.js'
    }
  },

  connect: {
    testig: {
      options: {
        port: 6969,
        base: '.'
      }
    }
  },

  mocha: {
    alltests: {
      options: {
        url: [
          'https://localhost:6969/test/thoughterTester.html'
        ]
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask( 'test', ['jshint','connect', 'mocha'] );
  grunt.registerTask('default', ['clean', 'test', 'jshint', 'sass', 'copy', 'concat'] );
};
