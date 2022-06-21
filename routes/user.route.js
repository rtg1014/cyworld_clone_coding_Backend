const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const loging = require('../middlewares/login-middleware');
const playlist = require('../middlewares/random_playlist');

// 회원가입
router.post('/signUp', loging, playlist, userController.signUp);

// 로그인
router.post('/login', loging, userController.login);

// 중복검사 이메일
router.get('/duplicatesEmail/:email', userController.duplicates);

module.exports = router;
