var db = require('utils/db.js');
var User = require('./userModel.js');
var Sequelize = require('sequelize');


var Pakt = db.define('Pakt', {
	name: Sequelize.STRING,
	description: Sequelize.STRING,
	isMonetary: Sequelize.BOOLEAN,
	consequenceText: Sequelize.STRING,
	consequenceValue: Sequelize.INTEGER,
	repeating: Sequelize.BOOLEAN,
	frequency: Sequelize.INTEGER,
	timeFrame: Sequelize.STRING,
	startDate: Sequelize.DATE,
	endDate: Sequelize.DATE,
	settled: Sequelize.BOOLEAN,
	open: Sequelize.BOOLEAN
});

Pakt.sync().then( function(){
  console.log("Pakt table created");
})
.catch( function( err ){
  console.error(err);
});

var User_Pakt = db.define("User_Pakt", {
	accepted: {
		type: Sequelize.BOOLEAN,
		default: false
	},
	win: Sequelize.BOOLEAN,
	delete: {
		type: Sequelize.BOOLEAN,
		default: false
	}
});

User.belongsToMany( Pakt, {through: "User_Pakt"} );
Pakt.belongsToMany( User, {through: "User_Pakt"} );


module.exports = {Pakt: Pakt, User_Pakt: User_Pakt};
