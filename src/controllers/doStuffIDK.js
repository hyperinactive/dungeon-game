const path = require('path');

exports.init = (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname + '/../views/index.html'));
}