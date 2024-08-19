const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = function(req, res, next) {

    const authToken = req.headers['authorization'];

    if (authToken != undefined) {

        const bearer = authToken.split(' ');
        const token = bearer[1];

        try {
            const decoded = jwt.verify(token, process.env.SECRET);

            if (decoded.role === 1) {
                next();
            } else {
                res.status(403).send('Você não tem permissão');
                return;
            }
            
            // console.log(decoded);
        } catch(error) {
            res.status(403).send('Necessário realizar autenticação');
            return;
        }

    } else {
        res.status(403).send('Necessário realizar autenticação');
        return;
    }
}
