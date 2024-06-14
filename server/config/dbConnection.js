const mysql = require('mysql2');
require('dotenv').config(); //Cargar variables de entorno de .env

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const promisePool = pool.promise();

module.exports = promisePool;