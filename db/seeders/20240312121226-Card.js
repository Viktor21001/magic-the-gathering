'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        cardName: 'VEIN RIPPER',
        cardImg: 'https://www.goha.ru/s/A:D5/om/j5VSQPaevv.png',
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
