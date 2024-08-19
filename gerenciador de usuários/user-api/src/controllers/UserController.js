const User = require('../models/User');
const PasswordToken = require('../models/PasswordToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

    async remove(req, res) {
        const id = req.params.id;

        const result = await User.delete(id);

        if (result.status) {
            res.status(200).json({msg: 'Usuário deletado com sucesso'});
        } else {
            res.status(406).json({error: result.error});
        }
    }

    async recoverPassword(req, res) {
        const { email } = req.body;
        const result = await PasswordToken.create(email);
        if(result.status) {

            // console.log(result.token);
            res.status(200).json({result: result.token});
        } else {
            res.status(406).json({error: result.error});
        }
    }

    async changePassword(req, res) {
        const token = req.body.token;
        const password = req.body.password;

        const isTokenValid = await PasswordToken.validate(token);

        if(isTokenValid.status) {
            await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token);
            res.status(200).json({msg: 'Senha alterada'});
        } else {
            res.status(406).json({error: 'token invalido!'});
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findByEmail(email);

        if (user) {

            const result = await bcrypt.compare(password, user.password);

            if (result) {

                const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET);

                res.status(200).json({token: token});

            } else {
                res.status(406).json({error: 'Senha incorreta'});
            }

        } else {

            res.status(406).json({status: false, err: 'usuário não existe mo sistema!'});

        }

    }

}

module.exports = new UserController;