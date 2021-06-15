const persist = require('./persist')
const sharedPersistDatastore = persist.sharedDatastore()

module.exports = {
  persist: sharedPersistDatastore,
}