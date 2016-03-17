var PaktUserQuery = require('../queries/paktUserQueries');
var PaktQuery = require('../queries/paktQueries');

module.exports = {
  deletePaktUser: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    // expecting an object with delete property in the body.data -> {data: { delete: true }}
    var update = req.body.data;
    var deletePakt;
    // apply the changes in the delete field
    PaktUserQuery.updatePaktUser(userId, paktId, update, function (updatedEntry) {
      // check if all users in the pakt wants to delete
      PaktUserQuery.getAllDeletes(paktId, function (deletes) {
        deletePakt = deletes.reduce(function (a, b) {
          return Boolean(a.delete) && Boolean(b.delete);
        });
        // if everybody in the pakt wants to delete, make the open field close in pakt table
        if (deletePakt) {
          PaktQuery.updatePakt(paktId, { open: false }, function (deletedPakt) {
            res.send(deletedPakt);
          });
        } else {
          res.send(updatedEntry);
        }
      });
    });
  },

  acceptPaktUser: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var update = req.body.data;
    PaktUserQuery.updatePaktUser(userId, paktId, update, function (updatedEntry) {
      res.send(updatedEntry);
    });
  }
};
