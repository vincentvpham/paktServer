// var db = require('../utils/db.js');
// var Pakt = require('../models/paktModel.js').Pakt;
// var User_Pakt = require('../models/paktModel.js').User_Pakt;
// var Sequelize = require('sequelize');
// var UserQuery = require('../queries/UserQueries');
var PaktQuery = require('../queries/paktQueries');
module.exports = {
  getAllPakts: function (req, res) {
    var userId = req.params.userId;
    PaktQuery.getPakts(userId, function (pakts) {
      res.send(pakts);
    });
  }
};
