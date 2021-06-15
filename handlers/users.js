const {
  createUser,
} = require('./datastore')

module.exports = {
  create,
}

async function create(req, res) {
  const user = await createUser(req.body)
  res.json({
    userId: user.id,
    userSecret: user.secret
  })
}
