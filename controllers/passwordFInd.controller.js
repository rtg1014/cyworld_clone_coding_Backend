const nodeMailer = require('nodemailer');
const senderInfo = require('../config/sender.json');

async function mailSender() {
  // // 김성현 메일 보내는 세팅 =====================================================
  const mailPoster = nodeMailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 465,
    auth: {
      user: senderInfo.user,
      pass: senderInfo.pass,
    },
  });
  console.log('fffff');
  // // 김성현 메일 받는 세팅 ==========================================

  const mailOption = {
    from: 'rtg1014@naver.com',
    to: 'rtg1014@naver.com',
    subject: '비밀번호 분실을 위한 메일입니다.',
    text: '축하합니다 드디어 노드메일러를 성공하셨군요!!',
  };

  console.log(3);

  // // 메일 전송

  mailPoster.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log('에러' + error);
    } else {
      console.log('전송 완료' + info.response);
    }
  });
}

console.log('끝');
module.exports = { mailSender };

// module.exports.sendPw = async (req, res) => {};

// module.exports.search.id;

// module.exports.search.pw;
