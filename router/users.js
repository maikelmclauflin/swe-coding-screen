const { Router } = require('express')
const { createUser } = require('../handlers')

const router = new Router()

router.post('/', createUser)

module.exports = router
