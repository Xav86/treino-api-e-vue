const User = require('../models/User');

class UserController {

    async listUsers(req, res) {
        const result = await User.findAll();

        if (!result.length > 0) {
            res.status(404).json({error: 'Nenhum usuário encontrado'});
            return;
        }

        res.status(200).json(result);
    }

    async findUser(req, res) {
        const { id } = req.params;

        const result = await User.findById(id);

        if (!result) {
            res.status(404).json({error: 'Usuário não encontrado'});
            return;
        }

        res.status(200).json(result);

    }

    async create(req, res) {
        const { name, email, password} = req.body;

        if(!email) {
            res.status(400).json({error: 'Email indefinido'});
            return;
        }

        if(!password) {
            res.status(400).json({error: 'Senha indefinida'});
            return;
        }

        const emailExiste = await User.findEmail(email);

        if (emailExiste) {
            res.status(406).json({error: 'Email já cadastrado'});
            return;
        }

        await User.new(name, email, password);

        res.status(200).json({msg: 'Pegando corpo da requisição'});
    }
    
    async edit(req, res) {
        const { id, name, email, role } = req.body;

        const result = await User.update(id, name, email, role);

        if (!result) {
            res.status(500).json({error: 'Erro interno ao editar usuário'});
            return;
        }

        if (result.status) {
            res.status(200).json({msg: 'Usuário atualizado com sucesso!'});
        } else {
            res.status(500).json({error: result.error});
        }

    }
}

module.exports = new UserController;