const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Services = require('../services/user.service');
const Bcrypt = require('bcrypt');
require('dotenv').config(); /// 이걸 써줘야 토큰사용 가능

// 회원가입
exports.signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword, userName } = req.body;
    const userCreate = await Services.signup(email, password, userName);
    if (userCreate) {
      res.status(200).send({
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

// 로그인
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginCheck = await Services.login(email);
    const passwordcheck = Bcrypt.compare(password, loginCheck.password);

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
exports.duplicates = async (req, res) => {
  try {
    const { email } = req.params;
    const overlapEmail = await Services.duplicates(email);
    console.log(overlapEmail);
    if (overlapEmail) {
      res.status(400).send({
        overlapEmail,
        Message: '중복된 이메일 입니다',
      });
    } else {
      res.status(200).send({ Message: '사용 가능한 이메일 입니다.' });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({
      Message: '잘못된 이메일 요청입니다.',
    });
  }
};
