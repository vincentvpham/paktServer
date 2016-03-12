var db = require('utils/db.js');
var Sequelize = require('sequelize');

var User = require('./userModel.js');
var Pakt = require('./paktModel.js');

var Picture = db.define('Picture', {
  pictureId: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  path: Sequelize.STRING,
  date: Sequelize.DATE

});

// foriegn key relationship for Pakt and Picture
Pakt.hasMany(Picture, { foriegnKey: 'pictureId' });
Picture.hasOne(Pakt, { foriegnKey: 'paktId' });

// foriegn key relationship for User and Picture
User.hasMany(Picture, { foriegnKey: 'pictureId' });
Picture.hasOne(User, { foriegnKey: 'userId' });

Picture.sync().then(function () {
  console.log('Picture table created');
})
.catch(function (err) {
  console.error(err);
});

module.exports = { Picture: Picture };
