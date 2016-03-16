var PaktUser = require('../utils/db.js').Pakt_User;

module.exports = {

  getUserPakt: function (userId, paktId, callback) {
    PaktUser.findOne({
      where: { UserId: userId, PaktId: paktId }
    }).then(function (userPakt) {
      callback(userPakt);
    }, function (error) {
      console.log('error getting UserPakt: ', error);
    });
  },

  updateUserPakt: function (userId, paktId, updateObj) {
    PaktUser.findOne({
      where: { UserId: userId, PaktId: paktId }
    }).then(function (userPakt) {
      userPakt.updateAttributes(updateObj).then(function (updated) {
        console.log('successfully updated:\n', updated.dataValues);
      }, function (error) {
        console.error('error updating UserPakt: ', error);
      });
    }, function (error) {
      console.error('error getting UserPakt: ', error);
    });
  },

  checkAll: function () {

  },

  addFriendsToPakt: function () {

  }

};
