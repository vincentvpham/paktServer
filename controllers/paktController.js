var PaktQuery = require('../queries/paktQueries');
module.exports = {
  getAllPakts: function (req, res) {
    var userId = req.params.userId;
    PaktQuery.getPakts(userId, function (pakts) {
      res.send(pakts);
    });
  }
};
