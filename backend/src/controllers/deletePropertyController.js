const { Property } = require('../db');

const deletePropertyController = async (id) => {
    // Busca el registro en la base de datos por su ID
    const property = await Property.findOne({ where: { id } });

    if (!property) {
        throw new Error('No se encontró el usuario');
    }

    // Elimina el usuario
    await property.destroy();

    return { message: 'Propiedad eliminado correctamente' };
};

module.exports = {
    deletePropertyController
};