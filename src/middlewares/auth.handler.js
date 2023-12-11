const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api']
    //verifica headers sea api o token
    if (apiKey === '123') {
        next()
    } else {
        next(boom.unauthorized())
    }
}
function checkAdminRole(req, res, next) {
    const user = req.user
    if (user.role === 'admin') {
        next()
    } else {
        next(boom.unauthorized())
    }
}

function checkRoles(...roles) {

    return (req, res, next) => {
        const user = req.user
        const userRoles = user.role.map(x=>x.name)
        console.log(userRoles)
        console.log(roles)
        if (roles.some(item => userRoles.includes(item))) {
            next()
        } else {
            next(boom.unauthorized())
        }
    }
}
module.exports = { checkApiKey, checkAdminRole, checkRoles }
