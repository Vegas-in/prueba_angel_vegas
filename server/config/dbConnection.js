const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB__HOST,
  user: process.env.DB__USER,
  password: process.env.DB__PASSWORD,
  port: process.env.DB__PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la BBDD:', err.stack);
    return;
  }
  console.log('Conectado a la BBDD');
});

module.exports = connection;