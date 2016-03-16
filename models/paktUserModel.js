module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Pakt_User', {
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    win: DataTypes.BOOLEAN,
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
