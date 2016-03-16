var UserPakts = require('../utils/db.js').Pakt_User;
var User = require('../utils/db.js').User;
var Pakt = require('../utils/db.js').Pakt;
var Picture = require('../utils/db.js').Picture;
module.exports = {
  getPakts: function (userId, callback) {
    Pakt.findAll({
      include: [{
        model: User,
        where: { id: userId }
      },
      {
        model: Picture
      },
      {
        model: UserPakts
      }]
    })
    .then(function (pakts) {
      callback(pakts);
    });
  }
};
