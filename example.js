'use strict';

var repo = require('./index.js');

repo('assemble', function(err, url) {
  console.log(url);
});
