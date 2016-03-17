var UserQuery = require('../queries/UserQueries');

module.exports = {

  getUserFriends: function (req, res) {
    var userId = req.params.userId;
    UserQuery.getFriends(userId, function (friends) {
      res.send(friends);
    });
  }
};
