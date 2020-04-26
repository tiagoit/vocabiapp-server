const users = require('./users')

module.exports = function (app) {
  app.use("/api/users", users);
};
