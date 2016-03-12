var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

require('./utils/middleware.js')(app);
require('./utils/routes.js')(app);

if (!module.parent) {
  app.listen(port);
}

console.log('Hello from the other side (Port ' + port + ')');

module.exports = app;
