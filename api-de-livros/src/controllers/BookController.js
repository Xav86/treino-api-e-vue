/* Controlador de Livros */
const Book = require('../models/Books');

class BookController {
    
    /* Listagem de todos os livros */
    async list(req, res) {
        try {
            const result = await Book.findAll();

            res.status(200).json(result);
        } catch(err) {
            console.log(err);
            res.status(500).json({err: err, msg: 'erro ao realizar Listagem'});
        }
    }

    /* Listagem de um unico livro */
    async findBook(req, res) {

    }

}

module.exports = new BookController;