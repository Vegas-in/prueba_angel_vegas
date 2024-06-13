const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
const app = express();
const port = 3000;

app.use(express.json()); // Para parsear el body de las peticiones

const contractsRouter = require('./routes/contracts.routes');

// Middlewares
// Configura opciones para permitir CORS solo para peticiones GET desde http://localhost:5173
const corsOptions = {
    origin: 'http://localhost:5173', // Permitir solo este origen
    methods: ['GET'], // Permitir solo el método GET
    };
// Usa CORS con las opciones configuradas
app.use(cors(corsOptions));
//Capa de seguridad básica Helmet
app.use(helmet());

// API
app.use('/api/contracts', contractsRouter); // Rutas de usuarios

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});