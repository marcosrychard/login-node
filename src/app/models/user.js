'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: async user => user.password = await bcrypt.hash(user.password, 8)
    }
  });

  return User;
};