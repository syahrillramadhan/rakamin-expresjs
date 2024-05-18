'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('film', {
      film_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      release_year: {
        type: Sequelize.INTEGER
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      rental_duration: {
        type: Sequelize.INTEGER
      },
      length: {
        type: Sequelize.INTEGER
      },
      replacement_cost: {
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.TEXT
      }, last_update: {
        allowNull: false,
        type: Sequelize.DATE
      },
      special_features: {
        type: Sequelize.TEXT
      },
      fulltext: {
        type: Sequelize.TSVECTOR
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};