const express = require("express");
const app = express();
let port = 3000;

app.get('/', function (req, res) {
    res.send('Hola mundo. Api funcionando.');
});

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});