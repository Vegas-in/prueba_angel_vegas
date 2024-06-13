const dbConnection = require("../config/dbConnection.js"); // Conexión BBDD
const queries = require("../queries/contracts.queries.js"); // Queries SQL

const getContracts = async (param) => {
    let result;
    try {
        const [rows, fields] = await dbConnection.query(queries.getContracts, [
            param, param, param, param, param, param, param, param
        ]);
        result = rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
    return result;
};

const contracts = {
    getContracts,
};

module.exports = contracts;
