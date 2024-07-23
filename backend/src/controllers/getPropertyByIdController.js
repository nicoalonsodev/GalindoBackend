const { Property } = require('../db')

const getPropertyByIdController = async(id) => {
    const property = await Property.findOne({ where: { id } })

    return property;
}

module.exports = { getPropertyByIdController };