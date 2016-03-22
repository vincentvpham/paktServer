// User_User join table
// associates users with other users (friends)
module.exports = function (sequelize) {
  return sequelize.define('User_User');
};
