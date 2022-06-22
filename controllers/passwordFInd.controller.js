// const nodeMailer = require('nodemailer');

// // 김성현 메일 보내는 세팅 =====================================================

// const mailPoster = nodeMailer.createTransport({
//   service: 'Naver',
//   host: 'smtp.naver.com',
//   port: 465,
//   auth: {
//     user: 'rtg1014@naver.com',
//     pass: '내꺼 네이버 비밀번호 넣을 예정',
//   },
// });

// // 김성현 메일 받는 세팅 ==========================================

// const mailOpt = (req, res) => {
//   const { email } = req.body;
//   const mailOptions = {
//     from: 'rtg1014@naver.com',
//     to: `${email}`,
//     subject: '비밀번호 분실을 위한 메일입니다.',
//     text: '당신의 비밀번호는 7777 입니다.',
//   };

//   return mailOptions;
// };

// // 메일 전송
// const sendMail = (mailOption) => {
//   mailPoster.sendMail(mailOption, function (error, info) {
//     if (error) {
//       console.log('에러 ' + error);
//     } else {
//       console.log('전송 완료 ' + info.response);
//     }
//   });
// };

// const mailOption = mailOpt(result[0].dataValues, title, contents());
// sendMail(mailOption);

// module.exports.sendPw = async (req, res) => {};

// module.exports.search.id;

// module.exports.search.pw;
