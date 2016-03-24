var User = require('../utils/db.js').User;
var UserUser = require('../utils/db.js').User_User;
var _ = require('lodash');

module.exports = {

  getFriends: function (userId, callback) {
    User.findAll({
      include: [{
        model: UserUser,
        where: { Userid: userId }
      }]
    }).then(function (usersJoin) {
      var friendIDs = [];
      if (usersJoin[0]) { // if the user has friends, add them to the array
        friendIDs = _.map(usersJoin[0].User_Users, function (joinObj) {
          return joinObj.friendId;
        });
      }
      User.findAll({
        where: { id: { $in: friendIDs } }
      }).then(function (friends) {
        callback(friends);
      });
    });
  },

  addFriends: function (profile, user) {
    var friends = profile.friends.data.map(function (friend) {
      return friend.id;
    });
    return User.findAll({
      attributes: ['id'],
      where: {
        fbId: { in: friends }
      },
      raw: true
    })
    .then(function (ids) {
      var friendsObjs = ids.map(function (friendId) {
        return { UserId: user[0].id, friendId: friendId.id };
      });
      return UserUser.bulkCreate(friendsObjs, { ignoreDuplicates: true });
    })
    .then(function () {
      return user;
    });
  },

  findOrCreateUser: function (profile) {
    return User.findOrCreate({
      where: {
        fbId: profile.id,
        name: profile.name,
        email: profile.email,
        picture: profile.picture.data.url
      },
      raw: true
    });
  }
};
