const {
  deletePropertyController,
} = require("../controllers/deletePropertyController.js");

const deletePropertyHandler = async (req, res) => {
  const id = req.params.id;

  try {
    await deletePropertyController(id);
    res.send("Property destruido");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deletePropertyHandler,
};
