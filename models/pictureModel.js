module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Picture', {
    pictureId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    path: DataTypes.STRING,
    date: DataTypes.DATE
  });
};
