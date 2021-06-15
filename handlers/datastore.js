const datastore = require("../datastore")
const queries = require('../queries')

module.exports = queries(datastore.persist)
