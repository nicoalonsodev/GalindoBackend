const postPropertyController = require("../controllers/postPropertyController");

const postPropertyHandler = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const propertyPosted = await postPropertyController(
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
    );
    return res.status(200).json(propertyPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postPropertyHandler,
};
