/*
 * grunt-appcache-manifest-update
 * https://github.com/tommygraves/grunt-appcache-manifest-update
 *
 * Copyright (c) 2016 Tommy Graves
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('appcacheupdate', 'Automatically update the appcache manifest file for HTML5 appcache.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ','
    });

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
        return file.replace(/# AppCache Auto Update: [0-9]*/, '# AppCache Auto Update: ' + Date.now());e.replace(/# AppCache Auto Update: [0-9]*/, '# AppCache Auto Update: ' + Date.now());
      }).join(grunt.util.normalizelf(options.separator));


      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('Manifest "' + f.dest + '" updated.');
    });
  });

};
