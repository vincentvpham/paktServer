module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Picture', {
    path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
