const pg = require('pg')

let dbs = {}

class DB {
  constructor(options = {}) {
    this.options = Object.assign({
      connectionString: process.env.DATABASE_URL,
    }, options)
    this.rwPool = new pg.Pool(this.options)
  }
  query(query, params, client) {
    // this function is useful so that we can add logging at a central location
    const target = client || this.rwPool
    return target.query(query, params)
  }
  async transact() {
    const client = this.rwPool.connect()
    await client.query('BEGIN')
    const rollback = () => client.query('ROLLBACK')
    const commit = () => client.query('COMMIT')
    return {
      client,
      rollback,
      commit,
    }
  }
  async quit() {
    return Promise.all([
      this.rwPool.end(),
    ])
  }
}

module.exports = {
  sharedDatastore,
  DB,
}

function sharedDatastore (options = {}) {
  const key = JSON.stringify(options)
  let db = dbs[key]
  if (!db) {
    db = dbs[key] = new DB(options)
  }
  return db
}
