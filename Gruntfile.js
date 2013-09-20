module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      dev: {
        files: ['css/*'],
        tasks: ['autoprefixer']
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },

      embed: {
        src: 'css/embed.css',
        dest: 'css/embed.prefixed.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['autoprefixer']);
};
