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
}

module.exports = new HomeController;