var Picture = require('../utils/db.js').Picture;

module.exports = {

  postPicture: function (userId, paktId, path) {
    return Picture.create({
      UserId: userId,
      PaktId: paktId,
      path: userId + '/' + paktId + '/' + path
    }).catch(function (error) {
      console.error(error);
    });
  }
};
