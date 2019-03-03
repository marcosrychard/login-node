module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        name: DataTypes.STRING,
    });

    Profile.associate = (models) => {
        Profile.belongsToMany(models.User, {
            through: 'UserProfiles',
            as: 'users',
            foreignKey: 'ProfileId'
        })
    }

    return Profile;
}