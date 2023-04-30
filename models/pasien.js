"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pasien.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Name is required" },
          notEmpty: { msg: "Name is required" },
        },
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Sex is required" },
          notEmpty: { msg: "Sex is required" },
        },
      },
      religion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Religion is required" },
          notEmpty: { msg: "Religion is required" },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "PhoneNumber is required" },
          notEmpty: { msg: "PhoneNumber is required" },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Address is required" },
          notEmpty: { msg: "Address is required" },
        },
      },
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "NIK is required" },
          notEmpty: { msg: "NIK is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Pasien",
    }
  );
  return Pasien;
};
