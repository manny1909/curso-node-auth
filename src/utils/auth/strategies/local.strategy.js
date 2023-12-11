const { Strategy } = require('passport-local')
const AuthService = require('../../../services/auth.service');
const _authService = new AuthService()

const LocalStrategy = new Strategy({
    //desde aca se puede modificar el nombre de username por el nombre que quieras
    usernameField: 'email',
    passwordField: 'password',
    },
    async (username, password, done) => {
        try {
            const user = await _authService.findUser(username, password)
            done(null, user)
        } catch (error) {
            //debe enviarse el error y false para indicar que algo salió mal
            done(error, false)
        }
    })



module.exports = LocalStrategy
