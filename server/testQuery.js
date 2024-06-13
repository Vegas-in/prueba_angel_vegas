// testQuery.js
const dbConnection = require('./config/dbConnection');

const testQuery = async () => {
    let connection;
    try {
        connection = await dbConnection.getConnection();
        const [rows, fields] = await connection.query('SELECT * FROM contratos LIMIT 50');
        console.log(rows); // Muestra los resultados en la consola
    } catch (err) {
        console.error('Error al ejecutar la consulta:', err);
    } finally {
        if (connection) {
            connection.release(); // Importante liberar la conexión al pool
        }
    }
};

testQuery();
