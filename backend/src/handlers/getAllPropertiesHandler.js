const {
  getAllPropertiesController,
} = require("../controllers/getAllPropertiesController");

const getAllPropertiesHandler = async (req, res) => {
  const { page = 1, limit = 50 } = req.query;

  try {
    let apiResponse = await getAllPropertiesController(page, limit);
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllPropertiesHandler,
};
