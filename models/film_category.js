'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_category extends Model {
    static associate(models) {}
  }
  film_category.init({
    film_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    last_update: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'film_category',
    tableName: 'film_category',
    timestamps: false,
    freezeTableName: true,
  });
  return film_category;
};