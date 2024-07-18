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
            
            if (!result) {
                return -1;
            } else {
                return result;
            }

        } catch(err) {
            console.log('Erro ao buscar livro');
            throw err;
        }
    }

    async insert(email, password, name, releaseYear, author) {
        try {
            const result = await knexInstance.insert({email: email, password: password, name: name, releaseYear: releaseYear, author: author})
            .into('books');

            console.log(result);
            if (!result) {
                throw {msg: 'erro ao cadastrar'};
            } else {
                return {msg: 'Usuário cadastrado com sucesso'};
            }
        } catch(err) {
            throw err;
        }
    }

    async deleteBook(idBook) {
        if (idBook != undefined) {
            try {
                await knexInstance.delete()
                    .where({id: idBook})
                    .table('books');
                return {status: true};
            } catch(err) {
                return {status: false, err: `Ocorreu um erro durante a deleção: ${err}`};
            }

        } else {
            return {status: false, err: 'O livro não existe, não podendo ser deletado.'};
        }
    }

    async editBook(idBook, email, password, name, releaseYear, author) {

        const objBook = {
            email: email,
            password: password,
            name: name,
            releaseYear: releaseYear,
            author: author
        }

        if (idBook != undefined) {
            try {
                await knexInstance.update(objBook)
                    .where({id: idBook})
                    .table('books');

                return {status: true};
            } catch(err) {
                return {status: false, err: `Ocorreu um erro durante a alteração: ${err}`};
            }

        } else {
            return {status: false, err: 'O livro não existe, não podendo ser editado.'};
        }
    }

}

module.exports = new Books;