const createClient = require('../utils/createclient');

module.exports = (req, res) => {
  const code = req.query['code'];
  if (code) {
    const client =  createClient();
    client.app.accessTokenFromCode(code).then((credentials) => {
      console.log(credentials);
      
      res.cookie('token', credentials.access_token, { maxAge: 60 * 60 * 1000});
      res.redirect('http://localhost:3000');
    });
  } else {
    res.end(`Error getting authorization ${req.query['error']}`);
  }
}
