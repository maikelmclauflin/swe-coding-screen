const { Router } = require('express')
const userRouter = require('./users')
const statusRouter = require('./statuses')

const router = new Router()

router.use('/users', userRouter)
router.use('/statuses', statusRouter)

module.exports = router