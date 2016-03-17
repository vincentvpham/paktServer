var PaktUserQuery = require('../queries/paktUserQueries');

module.exports = {
  putPaktUser: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var update = req.body.data;

    PaktUserQuery.updatePaktUser(userId, paktId, update, function (updatedEntry) {
      res.send(updatedEntry);
    });
  }
};
