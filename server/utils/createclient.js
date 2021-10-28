require('dotenv').config();
const Asana = require('asana');

const clientId =  process.env.ASANA_CLIENT_ID;
const clientSecret = process.env.ASANA_CLIENT_SECRET;
const port = process.env.PORT || 8338;

function createClient() {
  return Asana.Client.create({
    clientId,
    clientSecret,
    redirectUri: 'http://localhost:' + port + '/oauth_callback'
  });
}

module.exports = createClient;

