var PictureQuery = require('../queries/pictureQueries');

module.exports = {
  savePicture: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var path = req.body.data.path;

    PictureQuery.postPicture(userId, paktId, path)
    .then(function (picture) {
      res.send(picture);
    }).catch(function (error) {
      console.error(error);
    });
  }
};
