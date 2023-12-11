const joi = require('joi');

const id = joi.number()
const username = joi.string().min(3).max(45)
const email = joi.string()
const password = joi.string()

const createUserScheme = joi.object({
    username: username.required(),
    email: email.required(),
    password:password.required(),
})
const updateUserScheme = joi.object({
    username: username,
    password: password,
})
const loginUserScheme = joi.object({
    email: email.required(),
    password: password.required()
})
const getUserScheme = joi.object({
    id: id.required()
})
module.exports = { createUserScheme, updateUserScheme, getUserScheme, loginUserScheme }
