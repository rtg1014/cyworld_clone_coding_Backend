const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// 회원가입
router.post('/api/signUp', userController.signUp);

// 로그인
router.post('/api/login', userController.login);

// 중복검사 이메일
router.get('/api/duplicateseEmail/:email', userController.duplicates);

module.exports = router;
