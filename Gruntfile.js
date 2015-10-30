module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    sass: {
      options: {
        includePaths: require('node-bourbon').includePaths,
      },
      dev: {
        files: {
          'html/src/css/compiled.css': 'html/src/css/sass/compiled.scss'
        }
      },
      build: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'html/src/css/compiled.css': 'html/src/css/sass/compiled.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['html/src/js/**/*.js'],
        tasks: ['jshint']
      },
      livereload: {
        files: ['html/**/*','!**/node_modules/**'],
        options: {
          livereload: true,
          debounceDelay: 300
        }
      },
      sass: {
        files: ['html/src/css/sass/**/*.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('build', ['sass:build']);

};
