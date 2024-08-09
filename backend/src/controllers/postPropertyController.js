const { Property } = require("../db");

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, '');   // Elimina guiones al principio y al final
};

const postPropertyController = async (properties) => {
  const createdProperties = [];

  for (const propertyData of properties) {
    const {
      name,
      description,
      intro_description,
      status,
      categories,
      blueprints,
      img,
      present_images,
      carousel_images,
      init_date,
      finished_date,
      units_available,
      total_units,
      zone,
      surface,
      address,
      rooms,
      latitude,
      longitude,
      amenities,
      characteristics,
      video,
      sections,
      work_percentage
    } = propertyData;

    const slug = createSlug(name);
    let property = await Property.findOne({ where: { name } });

    if (!property) {
      property = await Property.create({
        name,
        slug,
        description,
        intro_description,
        status,
        categories,
        blueprints,
        img,
        present_images,
        carousel_images,
        init_date,
        finished_date,
        units_available,
        total_units,
        zone,
        surface,
        address,
        rooms,
        latitude,
        longitude,
        amenities,
        characteristics,
        video,
        sections,
        work_percentage
      });
    }

    createdProperties.push(property);
  }

  return createdProperties;
};

module.exports = {postPropertyController};
