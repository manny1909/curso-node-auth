const productsRouter = require("./products.route");
const usersRouter = require('./users.route');
const router = require('express').Router();
function routeApi(app) {
    app.use('/api/v1/', router)
    router.use('/products', productsRouter)
    router.use('/user', usersRouter)
}
module.exports = routeApi
