'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        cardName: 'VEIN RIPPER',
        cardImg:
          'https://spellmarket.ru/image/cache/image/images/mkm/vein-ripper-433-245x341.jpg',
        cardPrice: 200,
        wear: 'Новая',
        seller: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
