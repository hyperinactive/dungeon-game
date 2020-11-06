const path = require('path');
const gameLogic = require('./gameLogicController');

exports.init = (req, res, next) => {
  gameLogic.init();
  res.status(200).render('index');
};
