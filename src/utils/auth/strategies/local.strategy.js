const { Strategy } = require('passport-local')
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const LocalStrategy = new Strategy({
    //desde aca se puede modificar el nombre de username por el nombre que quieras
    usernameField: 'email',
    passwordField: 'password',
},
    async (username, password, done) => {
        try {
            //username es el email en este caso
            const user = await findByEmail(username)
            if (!user) {

            } else {
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    done(boom.unauthorized(), false)
                } else {
                    //passport dejaría user en el request, se puede acceder por medio de req.user
                    done(null, user)
                }
            }
        } catch (error) {
            //debe enviarse el error y false para indicar que algo salió mal
            done(error, false)
        }
    })

async function findByEmail(username) {
    const user = {
        username: 'aaa@gmail.com',
        password: '$2b$10$Z43ni.Ai8aAd5FlaG7eOeuiHI/zom3QVu6xbT1ihB49YrcnGd2CD.'
    }
    return user.username == username ? user : undefined
}

module.exports = LocalStrategy
