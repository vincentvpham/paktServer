var PaktUserQuery = require('../queries/paktUserQueries');
var PaktQuery = require('../queries/paktQueries');

module.exports = {
  putPaktUser: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var update = req.body.data;
    var deletePakt;
    PaktUserQuery.updatePaktUser(userId, paktId, update, function (updatedEntry) {
      // check if we are trying to delete the pakt
      if (update.delete) {
        PaktUserQuery.getAllDeletes(paktId, function (deletes) {
          deletePakt = deletes.reduce(function (a, b) {
            return Boolean(a.delete) && Boolean(b.delete);
          });
          if (deletePakt) {
            PaktQuery.updatePakt(paktId, { open: false }, function (deletedPakt) {
              res.send(deletedPakt);
            });
          } else {
            res.send(updatedEntry);
          }
        });
      } else {
        res.send(updatedEntry);
      }
    });
  },

  checkAllDeletes: function () {

  }
};
