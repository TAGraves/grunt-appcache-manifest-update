/*
 * grunt-appcache-manifest-update
 * https://github.com/tommygraves/grunt-appcache-manifest-update
 *
 * Copyright (c) 2016 Tommy Graves
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {


  grunt.registerMultiTask('appcacheupdate', 'Automatically update the appcache manifest file for HTML5 appcache.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var file = grunt.file.read(filepath);
        return file.replace(/# AppCache Auto Update: [0-9]*/, '# AppCache Auto Update: ' + Date.now() + ' ');
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('Manifest "' + f.dest + '" updated.');
    });
  });

};
