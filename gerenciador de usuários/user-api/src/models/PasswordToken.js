const knexInstance = require('../database/database');
const User = require('./User');
require('dotenv').config();

class PasswordToken {

    async create(email) {
        const user = await User.findByEmail(email);

        if(user){
            try{
                const token = Date.now();
                await knexInstance.insert({
                    user_id: user.ID,
                    used: 0,
                    token: token 
                }).into("passwordtokens");  

                return {status: true, token: token}
            }catch(error){
                console.log(error);
                return {status: false, error: error}
            }
        }else{
            return {status: false, error: 'O e-mail passado não existe no banco de dados!'};
        }
    }

    async validate(token) {
        try {
            const result = await knexInstance.select()
                .from('passwordtokens')
                .where({token: token})
                .first();

            if(result) {
                const tk = result;

                if(tk.used){
                    return {status: false};
                }else{
                    return {status: true, token: tk};
                }
            } else {
                return {status: false};
            }

        } catch(error) {
            console.log(error);
            return {status: false};
        }
    }

}

module.exports = new PasswordToken;