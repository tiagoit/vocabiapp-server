const mongoose = require("mongoose")

module.exports = function () {
  const url = process.env.MONGO_URL || "mongodb://127.0.0.1/vocabiapp"

  mongoose.set("useNewUrlParser", true)
  mongoose.set("useFindAndModify", false)
  mongoose.set("useCreateIndex", true)
  mongoose.set("useUnifiedTopology", true)
  mongoose.connect(url)
    .then(() => console.log(`[MongoDB] Connected!`))
    .catch(error => console.log(`[MongoDB] Failed to connect! URL: ${url}...`, { error }))
}
