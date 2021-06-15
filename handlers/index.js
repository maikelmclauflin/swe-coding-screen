const users = require('./users')
const statuses = require('./statuses')
module.exports = {
  createUser: users.create,
  createStatus: statuses.create,
  statusByUserId: statuses.byUserId,
}
