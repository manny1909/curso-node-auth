const boom = require('@hapi/boom');
function validatorHandler(schema, property) {
    return (req, res, next) => { //middleware dinámico 
        const data = req[property]
        const { error } = schema.validate(data)
        if (error) {
            next(boom.badRequest(error))
        } else {
            next()
        }
     }
}
module.exports = validatorHandler
