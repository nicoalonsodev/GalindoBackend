const { Property } = require('../db');

const getAllPropertiesController = async (page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  
  const allProperties = await Property.findAll({
    offset,
    limit,
    // where: {
    //   disabled: false
    // }
  });

  return allProperties;
};

module.exports = {
    getAllPropertiesController,
};
