'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bet extends Model {
    static associate({ User, Item }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Item, { foreignKey: 'itemId' });
    }
  }
  Bet.init(
    {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Bet',
    },
  );
  return Bet;
};
