const {
  getPropertyByIdController,
} = require("../controllers/getPropertyByIdController");

const getPropertyByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await getPropertyByIdController(id);
    return res.status(200).json(property);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPropertyByIdHandler,
};
