var Sequelize = require('sequelize');
var env = require('./env.js');
var sequelize;

if (!global.hasOwnProperty('db')) {
  sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS);

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Picture: sequelize.import(__dirname + '/../models/pictureModel.js')
    // add your other models here
  };

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */

  // paktId (primary key) of Pakt will be added to Picture as a foreign key
  // global.db.Picture.belongsTo(global.db.Pakt);

  // userId (primary key) of User will be added to Picture as a foreign key
  // global.db.Picture.belongsTo(global.db.User);
}
module.exports = global.db;
