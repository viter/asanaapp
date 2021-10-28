const index = require('./index');
const oauth_callback = require('./oauth_callback');
const authorize = require('./authorize');
const logout = require('./logout');

module.exports = {
  index,
  oauth_callback,
  authorize,
  logout
};