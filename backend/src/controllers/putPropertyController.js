const { Property } = require("../db");

const putPropertyController = async (id, updatedFields) => {
  try {
    const property = await Property.findOne({ where: { id } });
    if (!property) {
      throw new Error("No se encontró la propiedad.");
    }

    // Desestructurar los campos actualizados del objeto updatedFields
    const {
      productName,
      type,
      images,
      description,
      year,
      surface
    } = updatedFields;

    // Actualizar los campos del Property solo si se proporcionan en updatedFields
    if (productName) {
      property.productName = productName;
    }
    if (type) {
      property.type = type;
    }
    if (images) {
      property.images = images;
    }
    if (year) {
      property.year = year;
    }
    if (surface) {
      property.surface = surface;
    }
    if (description) {
      property.description = description;
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
