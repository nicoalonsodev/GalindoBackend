const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Property", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    present_images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    carousel_images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    blueprints: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    intro_description: {
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
    work_percentage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    units_available: {
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
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    longitude: {
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
    sections: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
  });
};
