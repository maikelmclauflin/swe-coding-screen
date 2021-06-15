const {
  createStatus,
} = require('./datastore')

module.exports = {
  create,
  paginate,
}

async function create(req, res) {
  const { body } = req
  const { userId, statusMessage } = body
  await createStatus({
    userId,
    message: statusMessage,
  })
  res.json({})
}

async function paginate(req, res) {
  const { body } = req
  const { userId, statusMessage } = body
  await createStatus({
    userId,
    message: statusMessage,
  })
  res.json({})
}
