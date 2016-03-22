var paktController = require('../controllers/paktController');
var pictureController = require('../controllers/pictureController');
var userController = require('../controllers/userController');
var paktUserController = require('../controllers/paktUserController');

var routes = function (app) {
  app.post('/api/users/login', userController.login);
  app.get('/api/users/friends/:userId', userController.getUserFriends);
  app.get('/api/pakts/:userId', paktController.getAllPakts);
  app.post('/api/pakt', paktController.postPakt);
  app.put('/api/pakt/delete/:userId/:paktId', paktUserController.deletePaktUser);
  app.put('/api/pakt/accept/:userId/:paktId', paktUserController.acceptPaktUser);
  app.post('/api/pakt/picture/:userId/:paktId', pictureController.savePicture);
};

module.exports = routes;
