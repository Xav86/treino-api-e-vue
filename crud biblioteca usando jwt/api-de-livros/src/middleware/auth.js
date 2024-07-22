const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res , next) {

    const authToken = req.headers['authorization'];

    if (!authToken) {
        res.status(401).json({err: 'Token Inválido'})
    } else {
        const bearer = authToken.split(' ');
        const token = bearer[1];

        jwt.verify(token, process.env.SECRET, (err, data) => {
            if(err) {
                res.status(401).json({err: 'token inválido'});
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};

                console.log(data);
                next();
            }
        });
    }

}

module.exports = auth;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoiY2FydGFub0BjYWV0YW5vLmNvbSIsImlhdCI6MTcyMTY1NDcxNiwiZXhwIjoxNzIxODI3NTE2fQ.excufSKO14PdEis8pD4301JVgqZ3YNlTdoNNP1fHbqw