const { User } = require('../models');

// 회원가입
exports.signup = async (email, password, userName) => {
  await User.create({ email, password, userName });
};

// 로그인
exports.login = async (email) => {
  return await User.findOne({
    attributes: ['userId', 'email', 'userName', 'password'],
    where: { email },
  });
};

// // 중복검사 이메일
exports.duplicates = async (email) => {
  return await User.findOne({ where: { email } });
};
