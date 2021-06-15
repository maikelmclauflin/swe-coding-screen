const { Router } = require('express')
const {
  createStatus,
  statusByUserId,
} = require('../handlers')

const router = new Router()

router.post('/', createStatus)
router.get('/:userId?', statusByUserId)

module.exports = router
