const express = require('express');
const router = express.Router();
const passwordFind = require('../controllers/passwordFInd.controller');

// 비밀번호 분실시 이메일 발송 test
router.post('/send/pw', passwordFind.mailSender);

//  이메일 인증번호 체크
router.post('/send/authCheck', passwordFind.authCheck);

// 비밀번호 변경
router.patch('/send/changePassword/:email', passwordFind.changePassword);

// api 인증번호를 받고 맞는지 아닌지 확인까지 하는 api 생성

// 인증번호 저장할곳도 만들기/생각하기

// 인증 확인 됫으면 그 값을 받아서 비밀번호를 변경하는 api 만들기

// (req, res) => {
//     const { email } = req.body;
//     // 이메일이 있는지 검사 (가입한 이메일인지)

//     let emailParam = {
//       toEmail: email,
//       subject: '비밀번호 분실을 위한 메일입니다.',
//       text: '비밀번호 찾기의 인증번호는 랜덤숫자 입니다.',
//     };

//     mailer.mailSender(emailParam);

//     res.status(200).send('인증번호 보내기 성공');
//   });

module.exports = router;
