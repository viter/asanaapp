require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const api = require('./api/api');


const userstokens = [];

const app = express();
const port = process.env.PORT || 8338;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', api.index);
app.get('/oauth_callback', api.oauth_callback);
app.get('/authorize', api.authorize);
app.get('/logout', api.logout);
console.log('-------');
console.log(userstokens);
console.log('-------');

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
})

