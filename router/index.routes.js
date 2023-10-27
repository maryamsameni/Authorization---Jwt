const express = require('express')
const { authRouters } = require('./auth.routes')
const { profileRoutes } = require('./profile.routes')
const checkAuth = require('../middleware/checkAuth')
const router = express.Router()

router.use('/auth', authRouters)
router.use('/user', checkAuth, profileRoutes)

module.exports = router