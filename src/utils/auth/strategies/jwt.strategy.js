const { ExtractJwt, Strategy } = require('passport-jwt');

const secret = process.env.SECRET || 'mySecret'
const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secret
}
const JwtStrategy = new Strategy(options, (payload, done) => { 
    return done(null, payload)
 })
module.exports = JwtStrategy
