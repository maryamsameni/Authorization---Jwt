const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = '19748641384812874951387'

function hashPassword(password) {
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}
function comparePassword(password, hashed) {
    return compareSync(password, hashed)
}
function signToken(payload) {
    return jwt.sign(payload, secret)
}
function verifyToken(token) {
    return jwt.verify(token, secret)
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}