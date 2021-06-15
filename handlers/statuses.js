const { statusByUserId, latestStatuses } = require('./datastore')

const {
  createStatus,
} = require('./datastore')

module.exports = {
  create,
  byUserId,
}

async function create(req, res) {
  const { userId, statusMessage } = req.body
  await createStatus({
    userId,
    message: statusMessage,
  })
  res.json({})
}

async function byUserId(req, res) {
  const { userId } = req.params
  const { offset = 0, limit = 10 } = req.query
  const q = userId ? statusByUserId({
    userId,
  }) : latestStatuses({
    limit,
    offset,
  })
  const statuses = await q
  const results = statuses.map(({
    message,
    user_id: userId,
  }) => ({
    userId,
    statusMessage: message,
  }))
  res.json(results)
}
