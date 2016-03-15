module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User_Pakt', {
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
