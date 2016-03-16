var Sequelize = require('sequelize');
var env = require('./env.js');
var sequelize;

if (!global.hasOwnProperty('db')) {
  sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS);

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Picture: sequelize.import(__dirname + '/../models/pictureModel.js'),
    Pakt: sequelize.import(__dirname + '/../models/paktModel.js'),
    Pakt_User: sequelize.import(__dirname + '/../models/paktUserModel.js'),
    User: sequelize.import(__dirname + '/../models/userModel.js'),
    User_User: sequelize.import(__dirname + '/../models/userUserModel.js')
  };

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
  global.db.User.belongsToMany(global.db.User, {
    as: 'friends',
    through: 'User_User' });
  global.db.User.belongsToMany(global.db.Pakt, {
    through: 'Pakt_User',
    foreignKey: 'UserId' });
  global.db.Pakt.belongsToMany(global.db.User, {
    through: 'Pakt_User',
    foreignKey: 'PaktId' });
  global.db.Pakt.hasMany(global.db.Picture, {
    foreignKey: 'PaktId'
  });
  global.db.Picture.belongsTo(global.db.User);
  global.db.Pakt.hasMany(global.db.Pakt_User);

  // global.db.Picture.belongsToMany(global.db.Pakt);
}
module.exports = global.db;
