const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Property", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    init_date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    finished_date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    units_vailable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    total_units: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    surface: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    rooms: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    long: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    amenities: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
    characteristics: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  });
};
