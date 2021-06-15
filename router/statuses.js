const { Router } = require('express')
const { createStatus } = require('../handlers')

const router = new Router()

router.post('/', createStatus)
router.post('/{id}', createStatus)

module.exports = router
