'use strict';
const { types } = require('pg');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    static associate(models) {

    }
  }
  actor.init({
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'actor',
    tableName: 'actor',
  });
  return actor;
};