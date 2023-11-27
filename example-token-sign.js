const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'mySecret'
const payload ={
    sub: {
        id:1
    },
    role: 'customer'
}
const payloadAdmin ={
    sub: {
        id:1
    },
    role: 'admin'
}
const payloadPwCUser ={
    sub: {
        id:1
    },
    role: 'pwcUser'
}
function signToken(payload, secret) {
    return jwt.sign(payload,secret)
}
function main() {
    const token = signToken(payloadPwCUser, secret)
    console.log(token)
}
main()
