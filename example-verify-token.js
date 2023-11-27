const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDEwNjQ0NjV9.Yxwu_E7ovqb-s0-Bno7idgCCk8T4juXlyKoXSn5mp9I'
const tokenAdmin ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDEwNjc1Mzd9.BffyLj28PBYPzew-EYDOkcVCHtsdwEnNLprsK_2OMq8'
const tokenPwCUser ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJyb2xlIjoicHdjVXNlciIsImlhdCI6MTcwMTA2ODM0M30._dy7vrQCPnbRm4DqLlTxkstl40zFu-1vXistLLx8VwI'
const secret = process.env.SECRET || 'mySecret'
function verifyToken(token,secret) {
    return jwt.verify(token, secret)
}
function main() {
    const payload = verifyToken(tokenPwCUser, secret)
    console.log(payload)
}
main()
