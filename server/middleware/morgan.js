const morgan = require('morgan');

// Define un token personalizado 'host'
// Este token devuelve el nombre del host de la solicitud
morgan.token('host', function (req, res) {
    return req.hostname; 
});

// Define un token personalizado 'body'
// Este token devuelve el cuerpo de la solicitud en formato JSON
morgan.token('body', function (req, res) {
    return JSON.stringify(req.body); 
});

// Define un token personalizado 'param'
// Este token devuelve el valor de un parámetro de la ruta de la solicitud
morgan.token('param', function (req, res, param) {
    return req.params[param]; 
});

module.exports = morgan;
