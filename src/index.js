const express = require('express');
const routeApi = require('./routes');
const passport = require('passport');
const { logErrors, errorHandler } = require('./middlewares/errorHandler.handler');
const {checkApiKey, checkAdminRole, checkRoles} = require('./middlewares/auth.handler');
const app = express()

//Authentication vs Authorization
/**
 * Authentication: quien eres y si tus credenciales son correctas te deja ingresar
 * Authorization: verifica los permisos que tienes (gestión de permisos)
 * Responsabilidades diferentes
 * Jwt stateless = todo por medio del token
 */
//MIDDLEWARES
app.use(express.json())

//routes
app.get('/', checkApiKey, (req, res) => {
    res.send('<h1>hola mundo</h1>')
}
)
//authentication con passport usando local strategy
require('./utils/auth/index')
//session esta en false debido a que se usara JWT
app.post('/login', passport.authenticate('local', {session:false}), async (req, res, next) => { 
    try {
        //elimina una propiedad del objeto
        delete req.user.password
        res.json(req.user)
    } catch (error) {
        next(error)
    }
 })
app.post('/user', passport.authenticate('jwt', {session:false}), (req, res, next) => { 
    try {
        const body = req.body
        console.log('autenticado y usuario creado!')
        res.status(201).json({user: body})
    } catch (error) {
        next(error)      
    }
})
app.delete('/user', passport.authenticate('jwt', {session:false}), checkAdminRole,
(req, res, next) => { 
    try {
        console.log('usuario eliminado')
        res.status(204).json({message: 'user deleted!'})
    } catch (error) {
        next(error)      
    }
})

app.patch('/user', passport.authenticate('jwt', {session:false}), checkRoles('admin', 'pwc user'),
(req, res, next) => { 
    try {
        const user = req.body
        delete user.password
        console.log('usuario editado')
        res.status(200).json({message: 'user deleted!', user })
    } catch (error) {
        next(error)      
    }
 })
app.get('/users', (req, res) => {
    const { limit, offset } = req.query
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send('no hay parámetros')
    }
})
routeApi(app)

//ERROR MIDDLEWARES
app.use(logErrors)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('listening on port 3000')
})
