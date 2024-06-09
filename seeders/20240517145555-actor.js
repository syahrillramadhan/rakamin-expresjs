'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actor', [
      {
        "first_name": "Anto",
        "last_name": "Siregar",
      }, {
        "first_name": "Messi",
        "last_name": "Betutu",
      }, {
        "first_name": "Ronaldo",
        "last_name": "Hitler",
      }, {
        "first_name": "Helner",
        "last_name": "Daweenie",
      }, {
        "first_name": "Andi",
        "last_name": "Ganteng",
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actor', null, {});
  }
};
