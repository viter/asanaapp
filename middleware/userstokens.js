const userstokens = [];

module.exports = (req, res, next) => {
  req.userstokens = userstokens;
  next();
}