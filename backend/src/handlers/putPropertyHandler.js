const {
  putPropertyController,
} = require("../controllers/putPropertyController.js");

const putPropertyHandler = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    description,
    introDescription,
    status,
    categories,
    blueprints,
    img,
    presentImages,
    carouselImages,
    initDate,
    finishedDate,
    unitsVailable,
    totalUnits,
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
    workPercentage
  } = req.body;
  const updatedFields = {
    name,
    description,
    intro_description: introDescription,
    status,
    categories,
    blueprints,
    img,
    present_images: presentImages,
    carousel_images: carouselImages,
    init_date: initDate,
    finished_date: finishedDate,
    units_available: unitsVailable,
    total_units: totalUnits,
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
    work_percentage: workPercentage
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
