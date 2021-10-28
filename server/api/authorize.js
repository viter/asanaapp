const createClient = require('../utils/createclient');

module.exports = (req, res) => {
  const client =  createClient();
  res.redirect(client.app.asanaAuthorizeUrl());
}