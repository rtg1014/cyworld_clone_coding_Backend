const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// 회원가입
router.post('/signUp', userController.signUp);

// 로그인
router.post('/login', userController.login);

// 중복검사 이메일
router.get('/duplicateseEmail/:email', userController.duplicates);

module.exports = router;
