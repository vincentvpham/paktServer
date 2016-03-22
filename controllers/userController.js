var UserQuery = require('../queries/UserQueries');

module.exports = {

  login: function (req, res) {
    var profile = req.body;
    UserQuery.findOrCreateUser(profile)
    .then(function (user) {
      res.send(user);
    }).catch(function (error) {
      console.error(error);
    });
  },

  getUserFriends: function (req, res) {
    var userId = req.params.userId;
    UserQuery.getFriends(userId, function (friends) {
      res.send(friends);
    });
  }
};
