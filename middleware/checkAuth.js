const { verifyToken } = require('../utils/auth.util')
const userModel = require("../model/user.model")

async function checkAuth(req, res, next) {
    try {
        const authorization = req?.headers?.authorization
        const [bearer, token] = authorization?.split(' ')
        if (bearer && bearer.toLowerCase() === 'bearer') {
            if (token) {
                const verifyResult = verifyToken(token)
                const user = await userModel.findOne({ email: verifyResult.email })
                if (!user) throw { status: 401, message: 'not found user acoount' }
                req.isAuthenticated = !!user
                req.user = {
                    fullName: user.fullName,
                    email: user.email
                }
                return next()
            }
            throw { status: 401, message: 'authorization failed' }
        }
        throw { status: 401, message: 'authorization failed' }
    } catch (error) {
        next(error)
    }
}

module.exports = checkAuth