const contracts = require('../models/contracts.models'); // Importar el modelo de la BBDD

const getContracts = async (req, res) => {
    const { origen, estado, cupon } = req.query;
    
    try {
        let result = await contracts.getContracts(origen, estado, cupon);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error interno servidor' });
    }
  };

  module.exports = {
    getContracts,
  };