/* Classe para consultas no banco lidando com os livros */
const knexInstance = require('../database/database');

class Books {

    async findAll() {
        try {
            const result = await knexInstance.select()
                .table('books')
                .orderBy('releaseYear', 'asc');
            return result;
        } catch(err) {
            console.log('Erro ao buscar todos os livros');
            throw err;
        }
    }

    async findOne(idBook) {
        try {
            const result = await knexInstance.select()
            .table('books')
            .where('id', idBook)
            .first();
            
            return result;
        } catch(err) {
            console.log('Erro ao buscar livro');
            throw err;
        }
    }

    async insert(email, password, name, releaseYear, author) {
        try {
            const result = await knexInstance.insert([email, password, name, releaseYear, author])
            .table('books');

            if (!result) {
                throw 'erro ao cadastrar';
            } else {
                return result
            }
        } catch(err) {
            throw err;
        }
    }

}

module.exports = new Books;