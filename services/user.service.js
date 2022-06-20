const { User, Profile } = require('../models');
const Bcrypt = require('bcrypt');

// 회원가입
exports.signup = async (email, password, userName) => {
  const salt = await Bcrypt.genSalt();
  const pwhash = await Bcrypt.hash(password, salt);

  await User.create({
    email,
    password: pwhash,
    userName,
  });
  await Profile.create({ introMessage: '', imageUrl: '' });
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
  return await User.findOne({
    where: { email },
  });
};
