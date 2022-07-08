const path = require('path');

require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', function (solitud, respuesta) {

    respuesta.sendFile(path.join(__dirname , 'views/index.html'));
    
});

app.get('/contacto', function (solitud, respuesta) {

    respuesta.sendFile(path.join(__dirname , 'views/contacto.html'));

});


app.listen(process.env.PUERTO, function () {
    console.log('Servidor iniciado en puerto: ' + process.env.PUERTO);
});