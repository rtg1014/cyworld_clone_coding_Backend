const { array } = require('joi');
const nodeMailer = require('nodemailer');
const senderInfo = require('../config/sender.json');
const Bcrypt = require('bcrypt');
const { User } = require('../models');

// 비밀번호 분실시 이메일 발송 start -------------------------------------------------
let authNumber = [];

async function mailSender(req) {
  //
  const { email } = req.body;
  let text = Math.floor(Math.random() * 100000);
  authNumber.push(text);

  console.log(authNumber);

  //  메일 보내는 옵션 세팅 함수 =====================================================
  const mailPoster = nodeMailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 465,
    auth: {
      user: senderInfo.user,
      pass: senderInfo.pass,
    },
  });

  // // 김성현 메일 받는 옵션 세팅 함수 ==========================================

  const mailOption = {
    from: senderInfo.user,
    to: email,
    subject: '인증번호를 위한 메일입니다.',
    text: ' 인증번호는 ' + `${text}`,
  };
  console.log(1111, mailOption);

  // // 메일 전송
  mailPoster.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log('에러' + error);
    } else {
      console.log('전송 완료' + info.response);
    }
  });
}

// 비밀번호 분실시 이메일 발송 end ---------------------------------------------------

// 이메일로 받은 인증번호 체크===========================================================
async function authCheck(req, res) {
  try {
    const { emailAuthNumber } = req.body;
    if (authNumber.includes(emailAuthNumber)) {
      res.status(200).send({
        Message: '인증번호가 일치합니다.',
      });
      console.log(authNumber);
    } else {
      res.status(400).send({
        Message: '인증번호가 일치하지 않습니다.',
      });
    }
  } catch (err) {
    console.log(err),
      res.status(401).send({
        errorMessage: '인증방식이 잘못되었습니다.',
      });
  }
}

// 인증번호 확인 후 비밀번호 변경 =====================================================
async function changePassword(req, res, next) {
  const { email } = req.params;
  const { password } = req.body;
  try {
    const salt = await Bcrypt.genSalt();
    const pwhashed = await Bcrypt.hash(password, salt);
    await User.update({ password: pwhashed }, { where: { email: email } });
    res.status(200).send({
      Message: '비밀번호가 변경됐습니다.',
    });
  } catch (err) {
    console.error(err),
      res.status(401).send({
        Message: '문자형으로 입력해주세요',
      });
    next(error);
  }
}

module.exports = { mailSender, authCheck, changePassword };
