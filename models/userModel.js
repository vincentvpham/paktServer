var db = require('utils/db.js');
var Sequelize = require('sequelize');

var User = db.define('User', {
	fbId: {
    type: Sequelize.STRING,
    unique: true
  }
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	picture: Sequelize.STRING
});

User.sync().then( function(){
  console.log("User table created");
})
.catch( function( err ){
  console.error(err);
});


User.belongsToMany(User, { as: 'friends', through: 'User_User'});

