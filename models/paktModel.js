module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Pakt', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isMonetary: DataTypes.BOOLEAN,
    consequenceText: DataTypes.STRING,
    consequenceValue: DataTypes.INTEGER,
    repeating: DataTypes.BOOLEAN,
    frequency: DataTypes.INTEGER,
    timeFrame: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    settled: DataTypes.BOOLEAN,
    open: DataTypes.BOOLEAN
  });
};
