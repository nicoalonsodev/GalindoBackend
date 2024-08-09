const {
  postPropertyController,
} = require("../controllers/postPropertyController");

const postPropertyHandler = async (req, res) => {
  try {
    const properties = req.body;
    const propertiesPosted = await postPropertyController(properties);
    return res.status(200).json(propertiesPosted);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });

  }
};

module.exports = {
  postPropertyHandler,
};
