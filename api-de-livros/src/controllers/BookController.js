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
        const {id} = req.params;

        if (isNaN(id)) {
            res.status(400).json({err: 'isso não é um valor valido!'})
        } else {
            const idBook = parseInt(id)
            try {
                const book = await Book.findOne(idBook);

                if (book === undefined || '' || null) {
                    res.status(404).json({msg: 'Livro não encontrado na base de dados'}) 
                } else {
                    res.status(200).json(book)
                }
            } catch(err) {
                res.status(500).json({err: err});
            }
        }

    }

    async create(req, res) {
        const {email, password, name, releaseYear, author} = req.body;

        if (email, password, name, releaseYear, author === undefined) {
            res.status(400).json({err: 'Erro ao inserir dados, dados enviados vazios ou incorretos'})
        } else {
            try {
                const result = await Book.insert(email, password, name, releaseYear, author);
                
                res.status(200).json({msg: result.msg});

            } catch(err) {
                res.status(500).json({err: err, msg: 'Erro ao inserir dados'})
            }
        }

    }

}

module.exports = new BookController;