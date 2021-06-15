const users = require('./users');
const statuses = require('./statuses')

module.exports = (db) => ({
  createUser: (...args) => users.create(db, ...args),
  createStatus: (...args) => statuses.create(db, ...args),
})