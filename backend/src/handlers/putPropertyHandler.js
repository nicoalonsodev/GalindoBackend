const {
  putPropertyController,
} = require("../controllers/putPropertyController.js");

const putPropertyHandler = async (req, res) => {
  const id = req.params.id;
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
  } = req.body;
  const updatedFields = {
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
  };
  try {
    await putPropertyController(id, updatedFields);
    console.log("cambiaste!");
    res.send("Registro modificado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putPropertyHandler,
};
