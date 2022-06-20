const express = require('express');
const auth = require('../middlewares/auth-middelware');
const { upload } = require('../middlewares/multer');
const profileController = require('../controllers/profile.controller');

require('express-async-errors');

const router = express.Router();

// 메인페이지 조회
router.get('/lobby', profileController.getAllUsers);

// 상세페이지 조회
router.get('/page/:userId', profileController.getPage);

// 내 페이지 조회
router.get('/mypage', auth, profileController.getMyPage);

// 상세페이지 수정
router.patch(
  '/mypage',
  auth,
  upload.single('image'),
  profileController.patchMyPage
);

module.exports = router;
