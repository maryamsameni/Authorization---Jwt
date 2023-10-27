const { default: mongoose } = require('mongoose')
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})
const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel