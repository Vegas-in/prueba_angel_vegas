const user = require('../models/contracts.models'); // Importar el modelo de la BBDD

const getContracts = async (req, res) => {
    const { id, origen, estado, cupon } = req.query;
    
    try {
        let result;
    // Compruebo si tengo parámetros
    if (id) {
        result = await user.getContracts(id);
    } else if (origen) {
        result = await user.getContracts(origen);
    } else if (estado) {
        result = await user.getContracts(estado);
    } else if (cupon) {
        result = await user.getContracts(cupon);
    } else {
      // Si no hay parámetro traer todos los contratos  
      result = await user.getContracts(null);
    }
    res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error interno servidor' });
    }
  };

  module.exports = {
    getContracts,
  };