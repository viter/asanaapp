const createClient = require('../utils/createclient');

module.exports = (req, res) => {
  console.log("Hello");
  const client =  createClient();
  const authHeader = req.headers.authorization;
  console.log("Token");
 
  const token = authHeader.split(" ")[1];
  console.log('______________');
   console.log(token);
   console.log('hhhhhhhhhhhhhhhhhhhhh');
  if (token) { 
    console.log('LLLLLLLLLLLLLLLLLLLLLLL');
    client.useOauth({ credentials: token });
    client.users.me().then(me => {

      res.header("Access-Control-Allow-Origin", "*"); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Accept", "application/json");
      res.json({user: me});
    }).catch(err => {
      res.json(`Error fetching user: ${err}`);
    });
  } else {
    console.log('////////////////////////////');
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.redirect('https://app.asana.com/-/oauth_authorize?client_id=1201183379932380&redirect_uri=http://localhost:3080&response_type=code');
  }  
}