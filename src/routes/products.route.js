const passport = require('passport');
const express = require('express');
const ProductService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductScheme, createProductScheme, updateProductScheme } = require('../schemas/product.schema');

const productsRouter = express()
const _productService = new ProductService()

productsRouter.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const {size} = req.query
    const products = _productService.find()
    res.json(products)
})
productsRouter.get('/:id', validatorHandler(getProductScheme, 'params'), (req, res) => {
    const { id } = req.params
    const product = _productService.findOne(id)
    res.json(product)
})
productsRouter.get('/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params
    res.json({
        categoryId,
        productId,
        name: 'product 1',
        price: 2000
    })
})
productsRouter.post('/', validatorHandler(createProductScheme, 'body'), (req, res) => {
    const body = req.body
    if (body) {
        const data = _productService.create(body)
        res.json({
            message:"created",
            data:data
        })
    } else {
        res.send('Error')
    }
})
productsRouter.patch('/:id',validatorHandler(getProductScheme, 'params'), validatorHandler(updateProductScheme,'body'),
(req, res) => { 
    const {id} = req.params
    const body = req.body
    const respuesta = _productService.update(id, body)
    res.json(respuesta)
 })
productsRouter.delete('/:id', (req, res) => { 
    const {id} = req.params
    const respuesta = _productService.delete(id)
    res.json(respuesta) 
 })
module.exports = productsRouter 
