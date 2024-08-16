const knexInstance = require('../database/database');
const bcrypt = require('bcrypt');

class User {

    async findAll() {
        try {
            const result = await knexInstance.select(['ID', 'name', 'email', 'role'])
                .from('users');

                return result;
                
        } catch(error) {
            console.log(error);
            return [];
        }
    }

    async findById(id) {
        try {
            const result = await knexInstance.select(['ID', 'name', 'email', 'role'])
                .from('users')
                .where({ID: id})
                .first();

                return result;
                
        } catch(error) {
            console.log(error);
            return undefined;
        }
    }

    async new(name, email, password) {
        try {
            const hash = await bcrypt.hash(password, 10);

            await knexInstance.insert({name, email, password: hash, role: 0}).into('users');

        } catch(error) {
            console.log(error);
        }
    }

    async findEmail(email) {
        try {
            const result = await knexInstance.select()
                .from('users')
                .where({email: email});
            
            if (result.length > 0) {
                return true;
            } else {
                return false
            }

        } catch(error) {
            console.log(error);
            return false;
        }
    }

    async update(id, name, email, role) {

        const user = await this.findById(id);

        if(!user) {
            return {status: false, error: 'Usuário não encontrado'};
        }

        const userEdit = {};

        if (!email) {
            return {status: false, error: 'Email vazio'};
        } else {
            if (email != user.email) {
                const result = await this.findEmail(email);

                if (!result) {
                    userEdit.email = email;
                } else {
                    return {status: false, error: 'Email já cadastrado'};
                }
            } 
        }

        if (name) {
            userEdit.name = name;
        }

        if (role !== undefined) {
            userEdit.role = role;
        }
        
        try {
            await knexInstance.update(userEdit)
                .where({ID: id})
                .table('users');

            return {status: true};
        } catch(error) {
            console.log(error);
            return {status: false, error: error};
        }

    }

}

module.exports = new User;