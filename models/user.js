'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Profile, {
        foreignKey: 'userId',
        targetKey: 'userId',
      });
    }
  }
  User.init(
    {
      userId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      email: DataTypes.STRING,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
