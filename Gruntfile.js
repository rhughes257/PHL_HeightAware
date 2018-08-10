module.exports = function (grunt) {
  // Build customizations would be left up to developer to implement.
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-ts');

  grunt.initConfig({
    ts: {
      default: {
        tsconfig: "./tsconfig.json"
      }
    },
    clean: {
      build: {
        src: ['dist/']
      },
      uncompressed: {
        src: [
          'dist/**/*.uncompressed.js'
        ]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['built.html'],
          dest: './dist/',
          rename: function(dest, src) {
            return dest + 'index.html';
          }
        }]
      }
    },
    dojo: {
      dist: {
        options: {
          releaseDir: '../dist',
        }
      },
      options: {
        profile: 'build.profile.js',
        dojo: 'dojoconfig.js',
        load: 'build',
        cwd: './',
        basePath: './src'
      }
    },

    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          src: ['src/app/resources/*.scss', 'node_modules/arcgis-js-api/themes/**/*.scss', '!node_modules/arcgis-js-api/themes/base/**'],
          ext: '.css'
        }]
      }
    },

    connect: {
      main: {
        options: {
          base: ".",
          port: 3003,
          protocol: "http",
          open: {
            target: "http://localhost:3003/src/index.html"
          }
        }
      }
    },

    jshint : {
      options: {
        jshintrc: true,
        // Ignoring the Airpsace widget until development resumes
        ignores: ['gruntfile.js', 'node_modules/'],
        force: true,
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        dojo: true
      },

      all: ['gruntfile.js', './src/**/*.js', './tests/**/*.js']
    },

    watch: {
      scripts: {
          cwd: 'src/',
          files: [
              'app/**/*.ts',
              'app/**/*.tsx',
              'resources/**'
          ],
          tasks: [
            'ts',
            'jshint'
          ],
          options: {
            'spawn': false,
            'reload': true
          }
      }
    }
  });

  grunt.registerTask('build', ['sass', 'ts', 'clean:build', 'dojo', 'copy', 'clean:uncompressed']);
  grunt.registerTask('styles', ['sass']);
  grunt.registerTask('default', ['sass', 'ts', 'jshint', 'connect:main', 'watch:scripts']);
};
