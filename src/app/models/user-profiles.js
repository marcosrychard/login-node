module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define('UserProfile', {
        UserId: DataTypes.INTEGER,
        ProfileId: DataTypes.INTEGER
    });

    return UserProfile;
}