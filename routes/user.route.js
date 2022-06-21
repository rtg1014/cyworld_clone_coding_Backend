const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const loging = require('../middlewares/login-middleware');

// 회원가입
router.post('/signUp', loging, userController.signUp);

// 로그인
router.post('/login', loging, userController.login);

// 중복검사 이메일
router.get('/duplicatesEmail/:email', userController.duplicates);

// 비밀번호 분실시 이메일 발송 test
router.post('/send/pw', passwordFInd.controller.sendPw);

router.post('/search/id', passwordFInd.controller.search.id);

router.post('/search/pw', passwordFInd.controller.search.pw);

module.exports = router;
