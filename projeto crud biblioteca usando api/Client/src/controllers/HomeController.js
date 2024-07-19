/* HomeController.js */
const axios = require('axios');

class HomeController {

    async home(req, res) {
        try {
            const result = await axios.get('http://localhost:3232/books');
            // console.log(result.data);
            res.render('home.ejs', {result: result.data});
        } catch(err) {
            console.log('Erro ao realizar consulta: ',err);
        }
    }

    async create(req, res) {
        const { book } = req.body;
        // console.log('Dados recebidos:', req.body);

        try {
            await axios.post('http://localhost:3232/book', book);
            // console.log(result.data);
            res.json({status: true, msg: 'Cadastrado com sucesso!'});
        } catch(err) {
            console.log('Erro ao cadastrar: ',err);
            return;
        }
    }
}

module.exports = new HomeController;