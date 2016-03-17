var paktController = require('../controllers/paktController');
// var pictureController = require('../controllers/pictureController');
var userController = require('../controllers/userController');
var paktUserController = require('../controllers/paktUserController');

var routes = function (app) {
  app.post('/api/users/login');
  app.get('/api/users/friends/:userId', userController.getUserFriends);
  app.get('/api/pacts/:userId', paktController.getAllPakts);
  app.post('/api/pact', paktController.postPakt);
  app.put('/api/pact/delete/:userId/:paktId', paktUserController.deletePaktUser);
  app.put('/api/pact/accept/:userId/:paktId', paktUserController.acceptPaktUser);
  app.post('/api/pact/picture/:userId/:paktId');
};

module.exports = routes;
