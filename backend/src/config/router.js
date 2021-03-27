const router = require('express').Router()
const { user } = require('../controllers')

router.use('/user', user)

module.exports = router