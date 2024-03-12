'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ User, Bet }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Bet, { foreignKey: 'itemId' });
    }
  }
  Item.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      startPrice: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    },
  );
  return Item;
};
