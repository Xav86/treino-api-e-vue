/* HomeController.js */
const axios = require('axios');

const axiosConfig = {
    headers: {
        Authorization: "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoiY2FydGFub0BjYWV0YW5vLmNvbSIsImlhdCI6MTcyMTY3MDgwNiwiZXhwIjoxNzIxODQzNjA2fQ.ikAqOjhEeNUFH2B8tlO0SOwixXjwFGuUyDeWGgIKZE8'
    }
}

class HomeController {

    async login(req, res) {
        res.render('login.ejs')
    }

    async auth(req, res) {
        const { email, password } = req.body;
    
        try {
            const response = await axios.post('http://localhost:3232/login', {
                email: email,
                password: password
            });
    
            const token = response.data.token;
            // console.log(token);

            res.redirect('/home');
    
        } catch (err) {
            const errorMessage = err.response?.data?.err || 'Erro ao fazer login';
            res.status(400).json({ error: errorMessage });
        }
    }    
    
    async home(req, res) {
        try {
            const result = await axios.get('http://localhost:3232/books', axiosConfig);
            // console.log(result.data);
            res.render('home.ejs', {result: result.data});
        } catch(err) {
            res.send('algo errado aqui')
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