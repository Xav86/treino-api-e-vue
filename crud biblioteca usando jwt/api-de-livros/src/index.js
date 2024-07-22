/* Raiz do projeto, onde vai ser chamado as rotas e configurações no geral  */
const express = require('express');
const app = express();
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// parse application/json
app.use(express.json());
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

/* Rotas */
app.use("/", router);

module.exports = app;