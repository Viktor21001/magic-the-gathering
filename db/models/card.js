'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Basket }) {
      this.belongsTo(User, { foreignKey: 'seller' });
      this.hasMany(Basket, { foreignKey: 'cardId' });
    }
  }
  Card.init(
    {
      cardName: DataTypes.STRING,
      cardImg: DataTypes.STRING,
      cardPrice: DataTypes.INTEGER,
      wear: DataTypes.STRING,
      seller: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
