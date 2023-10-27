const UserModel = require("../model/user.model")
const { hashPassword, comparePassword, signToken } = require("../utils/auth.util")

async function register(req, res, next) {
    try {
        const { fullName, email, password } = req.body
        const user = await UserModel.create({
            fullName,
            email,
            password: hashPassword(password)
        })
        res.send(user)
    } catch (error) {
        next(error)
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) throw { status: 404, message: 'User not found' }
        // verify
        if (comparePassword(password, user.password)) {
            const token = signToken({ id: user._id, email: user.email })
            res.send({ token, message: 'login successfully' })
        } else {
            throw { status: 400, message: 'Email or password is incorrect' }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}