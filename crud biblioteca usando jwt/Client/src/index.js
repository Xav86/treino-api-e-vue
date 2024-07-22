/* Raiz do projeto, onde vai ser chamado as rotas e configurações no geral  */
const express = require('express');
const app = express();
const router = require('./routes/routes');

// View engine
app.set('view engine','ejs');

app.use(express.json());

// Static
app.use(express.static('public'));

// Config bootstrap5 pra ser estatico
// app.use(express.static("node_modules/bootstrap/dist/"));
app.use('/css', express.static('../node_modules/bootstrap/dist/css'));
app.use('/js', express.static('../node_modules/bootstrap/dist/js'));

/* Rotas */
app.use("/", router);

module.exports = app;