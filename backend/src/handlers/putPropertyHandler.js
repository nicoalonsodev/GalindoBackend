const {
  putPropertyController,
} = require("../controllers/putPropertyController.js");

const putPropertyHandler = async (req, res) => {
  const id = req.params.id;
  const {
    productName,
    type,
    images,
    description,
    year,
    surface
  } = req.body;
  const updatedFields = {
    productName,
    type,
    images,
    description,
    year,
    surface
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
