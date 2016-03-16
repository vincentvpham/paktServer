var paktController = require('../controllers/paktController');
// var pictureController = require('../controllers/pictureController');
// var userController = require('../controllers/userController');

var routes = function (app) {
  app.post('/api/users/login');
  app.get('/api/users/friends/:userId');
  app.get('/api/pacts/:userId', paktController.getAllPakts);
  app.put('/api/pact/:userId/:pactId');
  app.put('/api/pact/accept/:userId/:pactId');
  app.post('/api/pact/picture/:userId/:pactId');
};

module.exports = routes;
