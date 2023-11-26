const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api']
    //verifica headers sea api o token
    if (apiKey==='123') {
        next()
    } else {
        next(boom.unauthorized())
    }
}
module.exports = checkApiKey
