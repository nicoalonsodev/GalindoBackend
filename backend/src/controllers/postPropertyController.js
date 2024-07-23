const { Property } = require("../db");

const postPropertyController = async (
  productName,
      description,
      images,
      init_date,
      finished_date,
      units_vailable,
      total_units,
      zone,
      surface,
      address,
      rooms,
      lat,
      long,
      amenities,
      characteristics,
      video
) => {
  // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
  let property = await Property.findOne({ where: { productName } });

  if (!property) {
    // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
    property = await Property.create({
      productName,
      description,
      images,
      init_date,
      finished_date,
      units_vailable,
      total_units,
      zone,
      surface,
      address,
      rooms,
      lat,
      long,
      amenities,
      characteristics,
      video
    });
  }
  return property;
};

module.exports = postPropertyController;
