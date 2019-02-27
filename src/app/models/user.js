'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: async user => await bcrypt.hash(user.password, 8)
    }
  });

  User.prototype.checkPassWord = function (password) {
    return bcrypt.compare(password, this.password)
  }

  return User;
};