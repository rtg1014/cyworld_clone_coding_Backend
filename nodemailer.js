const nodeMailer = require('nodemailer');

// 구글 타입 ===========================================================

// let transporter = nodemailer.createTransport({
//   // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이기에 'gmail'
//   service: 'gmail',
//   // host를 gmail로 설정
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     // Gmail 주소 입력, 'testmail@gmail.com'
//     user: process.env.NODEMAILER_USER,
//     // Gmail 패스워드 입력
//     pass: process.env.NODEMAILER_PASS,
//   },
// });

// let info = await transporter.sendMail({
//   // 보내는 곳의 이름과, 메일 주소를 입력
//   from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
//   // 받는 곳의 메일 주소를 입력
//   to: email,
//   // 보내는 메일의 제목을 입력
//   subject: 'WDMA Auth Number',
//   // 보내는 메일의 내용을 입력
//   // text: 일반 text로 작성된 내용
//   // html: html로 작성된 내용
//   text: generatedAuthNumber,
//   html: `<b>${generatedAuthNumber}</b>`,
// });

// // 샘플코드

// const main = async () => {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.NODEMAILER_USER,
//       pass: process.env.NODEMAILER_PASS,
//     },
//   });

//   // send mail with defined transport object
//   let infooo = await transporter.sendMail({
//     from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
//     to: email,
//     subject: 'WDMA Auth Number',
//     text: generatedAuthNumber,
//     html: `<b>${generatedAuthNumber}</b>`,
//   });

//   console.log('Message sent: %s', info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   res.status(200).json({
//     status: 'Success',
//     code: 200,
//     message: 'Sent Auth Email',
//   });
// };

// main().catch(console.error);

// //  네이버 타입===================================

// const mailPoster1 = nodeMailer.createTransport({
//   service: 'Naver',
//   host: 'smtp.naver.com',
//   port: 587,
//   auth: {
//     user: '네이버 아이디 @ naver.com',
//     pass: '네이버 아이디의 비밀번호',
//   },
// });

// 김성현 메일 보내는 세팅 =====================================================

const mailPoster = nodeMailer.createTransport({
  service: 'Naver',
  host: 'smtp.naver.com',
  port: 465,
  auth: {
    user: 'rtg1014@naver.com',
    pass: '내꺼 네이버 비번 들어갈 예정',
  },
});

// 김성현 메일 받는 세팅 ==========================================

const mailOpt = () => {
  const mailOptions = {
    form: 'rtg1014@naver.com',
    to: 'rtg1014@naver.com', /// 받는 유저메일
    subject: '비밀번호를 알려드리기위해 발송된 메일입니다.', /// 메일 제목
    text: '당신의 비밀번호는 1004 입니다.', /// 내용
  };
  return mailOptions;
};

// 메일 전송
const sendMail = (mailOption) => {
  mailPoster.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log('에러 ' + error);
    } else {
      console.log('전송 완료 ' + info.response);
    }
  });
};

const mailOption = mailOpt(result[0].dataValues, title, contents());
sendMail(mailOption);
