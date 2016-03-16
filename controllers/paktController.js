// var db = require('../utils/db.js');
// var Pakt = require('../models/paktModel.js').Pakt;
// var User_Pakt = require('../models/paktModel.js').User_Pakt;
// var Sequelize = require('sequelize');
// var UserQuery = require('../queries/UserQueries');
var UserPaktQuery = require('../queries/paktUserQueries');
module.exports = {
  getAllPakts: function (req, res) {
    var userId = req.params.userId;
    UserPaktQuery.getPakts(userId, function (pakts) {
      res.send(pakts);
    });
  }
};

//   getAllPaktsbyUserId: function (req, res) {
//     var userId = req.params.userId;
//     var data = {};
//     UserQuery.getPaktIdsByUserId(userId)
//     .then(function ()
//     // get pakt ids for a user's pakts
//     getUserPaktIds(userId)
//     .then(function (user_pakts) {

//         //get pakt objects for the pakt ids
//       user_pakts.forEach(function(user_pakt){
//       getPaktById(user_pakt.pakt_id)
//       .then(function(paktObject){

//             //make empty users array which we will fill
//         paktObject.users = [];

//             //get users ids for each pakt
//       getPaktUsersIds(user_pakt.pakt_id)
//       .then(function(users){
//               users.forEach(function(userId){

//                 //get user object for each user id
//           getUserById(userId)
//           .then(function(user){//                   //get user pictures for each pakt
//               getUserPicturesForPakt(userId)
//                 .then(function(pictures){
//             user.pictures = pictures;
//           paktObject.users.push(user);
//                         });
//                       });
//                   });
//                 });
//             });
//          });
//       });
//   }
// };

// var getUserPaktIds = function(userId){
//   User_Pakt.findAll({
//     where: {
//       user_id: userId
//     }
//   })
// };

// var getPaktObject = function(paktId){
//   //findOne in the pakt table, return single pact object
//   //
// };

// var date = function (packId) {
//   Pakt.find({
//     where: {
//       id: packId
//     }})
//   .then( function(data) {
//     return data.startDate
//     //data
//   })
// }
