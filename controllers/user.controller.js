// const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const Joimiddleware = require('../middlewares/joi-middleware');
const Services = require('../services/user.service');
const Bcrypt = require('bcrypt');
require('dotenv').config(); /// 이걸 써줘야 토큰사용 가능

// 회원가입
exports.signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword, userName } =
      await Joimiddleware.validateAsync(req.body);

    const emailCheck = await Services.duplicates(email);
    console.log(111, email);
    if (emailCheck) {
      return res.status(400).send({
        errorMessage: '이메일 중복검사 해주세요',
      });
    }
    let userCreate = await Services.signup(email, password, userName);
    console.log(222, userCreate);
    if (!userCreate) {
      return res.status(200).send({
        Message: '회원가입 성공',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({
      errorMessage: '회원가입 실패',
    });
  }
};

// 로그인 joi
const AuthScheam = Joi.object({
  email: Joi.string()
    .empty()
    .email()
    .required()
    .messages({ 'string.empty': '이메일을 입력해주세요' }),
  password: Joi.string()
    .empty()
    .required()
    .messages({ 'any.required': '패스워드를 입력해주세요' }),
});

// 로그인
exports.login = async (req, res, next) => {
  try {
    const { email, password } = await AuthScheam.validateAsync(req.body);
    const loginCheck = await Services.login(email);
    const passwordcheck = await Bcrypt.compare(password, loginCheck.password);
    if (!loginCheck || !passwordcheck) {
      res.status(400).send({
        message: '이메일 혹은 비밀번호가 틀렸습니다.',
      });
    }

    const token = jwt.sign(
      { userId: loginCheck.userId },
      process.env.SECRET_KEY
    );
    const userId = loginCheck.userId;
    const userName = loginCheck.userName;
    res.status(200).send({
      token,
      userId,
      userName,
    });
  } catch (err) {
    console.log(err);
    res.status(401).send({
      errorMessage: '로그인이 실패하였습니다.',
    });
  }
};

// // 중복검사 이메일
exports.duplicates = async (req, res, next) => {
  try {
    const { email } = req.params;
    const overlapEmail = await Services.duplicates(email);
    console.log(email);
    console.log(overlapEmail);
    if (overlapEmail) {
      res.status(400).send({
        success: false,
        Message: '이메일 중복입니다.',
      });
      return;
    } else {
      res.status(200).send({
        success: false,
        Message: '사용 가능한 이메일 입니다',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({
      success: false,
      Message: '잘못된 이메일 요청입니다.',
    });
  }
};
