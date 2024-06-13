const dbConnection = require("../config/dbConnection.js"); // Conexión BBDD
const queries = require("../queries/contracts.queries.js"); // Queries SQL

const getContracts = async (origen, estado, cupon) => {
    let result;
    let where = "";
    try {

        if (origen) {
            where += `AND origen = '${origen}' `;
        } else if (estado) {
            where += `AND estado = '${estado}' `;
        } else if (cupon) {
            where += `AND cupon = '${cupon}' `;
        }

        const [rows, fields] = await dbConnection.query(queries.getAllContracts + where);
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
