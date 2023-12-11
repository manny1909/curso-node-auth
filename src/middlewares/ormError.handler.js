const {ValidationError} = require('sequelize');
function ormErrorHandler(error, req, res, next) {
    if (error instanceof ValidationError) {
        res.status(409).json({
            status: 409,
            message: error.name,
            errors: error.errors
        })
    }
    next(error)
}
module.exports = ormErrorHandler
