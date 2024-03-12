'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Basket }) {
      this.belongsTo(User, { foreignKey: 'seller' });
      this.belongsTo(Basket, { foreignKey: 'cardId' });
    }
  }
  Card.init(
    {
      cadrName: DataTypes.STRING,
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
