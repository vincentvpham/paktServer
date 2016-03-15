
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    fbId: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING
  });
};
