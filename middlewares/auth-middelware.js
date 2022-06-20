const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(' ');

  if (tokenType !== 'Bearer') {
    res.status(401).send({
      errorMessage: '로그인을 반드시 하고 사용 하세요',
    });
    return; ///오류가 났으니 더이상 진행시키면 안되서 return
  }
  try {
    const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);
    console.log(userId);
    console.log(process.env.SECRET_KEY);
    User.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      errorMessage: '로그인 후 사용 하세요',
    });
    return;
  }
};
