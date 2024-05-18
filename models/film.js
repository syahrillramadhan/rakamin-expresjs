'use strict';
const {
  Model,
  INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    static associate(models) {
      film.belongsToMany(models.category, { through: models.film_category, foreignKey: 'film_id' });
    }
  }

  film.init({
    film_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    language_id: {
      type: DataTypes.INTEGER
    },
    rental_duration: {
      type: DataTypes.INTEGER
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    replacement_cost: {
      type: DataTypes.FLOAT,
    },
    rating: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    special_features: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fulltext: {
      type: DataTypes.TSVECTOR,
    },
  }, {
    sequelize,
    modelName: 'film',
    tableName: 'film',
    timestamps: false,
  });
  return film;
};