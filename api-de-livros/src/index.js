/* Raiz do projeto, onde vai ser chamado as rotas e configurações no geral  */
const express = require('express');
const app = express();
const router = require('./routes/routes');

app.use(express.json());

/* Rotas */
app.use("/", router);

module.exports = app;