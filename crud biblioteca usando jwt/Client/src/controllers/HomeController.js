/* HomeController.js */
const axios = require('axios');

class HomeController {

    async home(req, res) {
        try {
            const result = await axios.get('http://localhost:3232/books');
            // console.log(result.data);
            res.render('home.ejs', {result: result.data});
        } catch(err) {
            console.log('Erro ao realizar consulta: ', err);
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
            console.log('Erro ao cadastrar: ', err);
            return;
        }
    }

    async delete(req, res) {
        const { book } = req.body;
        // console.log('Dados recebidos:', req.body);

        try {
            await axios.delete(`http://localhost:3232/book/${book}`);
            // console.log(result.data);
            res.json({status: true, msg: 'Deletado com sucesso!'});
        } catch(err) {
            console.log('Erro ao cadastrar: ', err);
            return;
        }
    }

    async edit(req, res) {
        const { book } = req.body;
        // console.log('Dados recebidos:', book);
    
        try {
            await axios.put(`http://localhost:3232/book/${book.id}`, book);
            // console.log(result.data);
            res.json({status: true, msg: 'Editado com sucesso!'});
        } catch(err) {
            console.log('Erro ao editar: ', err);
            res.status(500).json({status: false, msg: 'Erro ao editar usuário!'});
        }
    }
    
}

module.exports = new HomeController;