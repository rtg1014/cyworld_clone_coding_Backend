'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User, {
        foreignKey: 'userId',
        targetKey: 'userId',
      });
    }
  }
  Profile.init(
    {
      userId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      introMessage: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      playlist: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
