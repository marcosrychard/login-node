'use strict';
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async user => user.password = await bcrypt.hash(user.password, 8)
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Profile, {
      through: 'UserProfiles',
      as: 'profiles',
      foreignKey: 'UserId'
    })
  }

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.hasAny = function (...profiles) {
    return profiles.some(profile => this.profiles.indexOf(profile) !== -1)
  }

  User.prototype.generateToken = function () {
    return jwt.sign({
      sub: this.email,
      iss: 'login-node'
    }, 'APP_SECRET', {
      expiresIn: '1d'
    });
  };

  return User;
};