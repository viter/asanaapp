const axios = require('axios');

module.exports = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (token) { 
    const params = new URLSearchParams();
    params.append('client_id', process.env.ASANA_CLIENT_ID);
    params.append('client_secret', process.env.ASANA_CLIENT_SECRET);
    params.append('token', token);
    console.log(params);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    axios.post('https://app.asana.com/-/oauth_revoke', params, config)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    res.redirect(client.app.asanaAuthorizeUrl());
  }  
}