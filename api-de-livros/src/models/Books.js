/* Classe para consultas no banco lidando com os livros */
const knexInstance = require('../database/database');

class Books {

    async findAll() {
        try {
            const result = await knexInstance.select().table('books')
                .orderBy('releaseYear', 'asc');
            return result;
        } catch(err) {
            throw err;
        }
    }

}

module.exports = new Books;