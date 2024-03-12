'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ Card, User }) {
      this.hasMany(User, { foreignKey: 'userId' });
      this.hasMany(Card, { foreignKey: 'cardId' });
    }
  }
  Basket.init(
    {
      userId: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Basket',
    },
  );
  return Basket;
};
