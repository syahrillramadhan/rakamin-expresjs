'use strict';
const {
  Model,
  INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      category.belongsToMany(models.film, { through: models.film_category, foreignKey: 'category_id' });
    }
  }
  category.init({
    category_id: {
      type: INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'category',
    tableName: 'category',
    timestamps: false,
  });
  return category;
};