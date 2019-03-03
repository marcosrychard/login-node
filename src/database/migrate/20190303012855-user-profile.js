'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {

    return queryInterface.createTable('UserProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      ProfileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('UserProfiles');
  }
};