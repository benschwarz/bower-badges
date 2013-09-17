module.exports = function (grunt) {
  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['autoprefixer']);
};