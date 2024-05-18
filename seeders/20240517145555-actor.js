'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actor', [
      {
        "first_name": "Budiono",
        "last_name": "Siregar",
      }, {
        "first_name": "Bebek",
        "last_name": "Betutu",
      }, {
        "first_name": "Adolf",
        "last_name": "Hitler",
      }, {
        "first_name": "Jason",
        "last_name": "Daweenie",
      }, {
        "first_name": "Mahen",
        "last_name": "Ganteng",
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actor', null, {});
  }
};
