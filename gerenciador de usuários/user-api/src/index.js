/* Raiz do projeto, onde vai ser chamado as rotas e configurações no geral  */
const express = require('express');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');

app.use(cors());

app.use(express.json());

// Static
app.use(express.static('public'));

/* Rotas */
app.use("/", router);

module.exports = app;