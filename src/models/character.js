'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      character.belongsTo(models.movie,
        {
          as: "pelicula_id",
          foreignKey: "id"
        })
    }
  }
  character.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    imagen: DataTypes.STRING,
    edad: DataTypes.NUMBER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.TEXT,
    pelicula_id: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};
