const { Property } = require("../db");
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, ""); // Elimina guiones al principio y al final
};
const putPropertyController = async (id, updatedFields) => {
  try {
    const property = await Property.findOne({ where: { id } });
    if (!property) {
      throw new Error("No se encontró la propiedad.");
    }

    // Desestructurar los campos actualizados del objeto updatedFields
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
      work_percentage,
    } = updatedFields;

    let slug;
    if (name) {
      slug = createSlug(name);
      property.name = name;
      property.slug = slug;
    }

    if (intro_description) {
      property.intro_description = intro_description;
    }
    if (status) {
      property.status = status;
    }
    if (categories) {
      property.categories = categories;
    }
    if (blueprints) {
      property.blueprints = blueprints;
    }
    if (img) {
      property.img = img;
    }
    if (surface) {
      property.surface = surface;
    }
    if (description) {
      property.description = description;
    }
    if (present_images) {
      property.present_images = present_images;
    }
    if (carousel_images) {
      property.carousel_images = carousel_images;
    }
    if (init_date) {
      property.init_date = init_date;
    }
    if (finished_date) {
      property.finished_date = finished_date;
    }
    if (units_available) {
      property.units_available = units_available;
    }
    if (total_units) {
      property.total_units = total_units;
    }
    if (zone) {
      property.zone = zone;
    }
    if (address) {
      property.address = address;
    }
    if (rooms) {
      if (Array.isArray(rooms) && rooms.length > 0) {
        property.rooms = rooms;
      }
    }
    if (latitude) {
      property.latitude = latitude;
    }
    if (longitude) {
      property.longitude = longitude;
    }
    if (amenities) {
      if (Array.isArray(amenities) && amenities.length > 0) {
        // if (typeof amenities[0] === 'object' && amenities[0].id) {
        //   property.amenities = amenities.map(amenity => amenity.id.toString());
        // } else {
        property.amenities = amenities;
      }
      // }
    }
    if (characteristics) {
      property.characteristics = characteristics;
    }
    if (video) {
      property.video = video;
    }
    if (sections) {
      property.sections = sections;
    }
    if (work_percentage) {
      property.work_percentage = work_percentage;
    }

    await property.save();

    return property;
  } catch (error) {
    console.error("Error al actualizar el Property:", error);
    throw error;
  }
};

module.exports = {
  putPropertyController,
};
