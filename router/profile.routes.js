const express = require('express')
const router = express.Router()
const { getProfile } = require('../controller/profile.controller')

router.get('/profile', getProfile)

module.exports = {
    profileRoutes: router
}