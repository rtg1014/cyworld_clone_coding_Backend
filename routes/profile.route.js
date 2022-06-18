const express = require('express');
const auth = require('../middlewares/auth-middelware');
const { upload } = require('../modules/multer');
const profileController = require('../controllers/profile.controller');

require('express-async-errors');

const router = express.Router();

// 메인페이지 조회
router.get('/lobby', profileController.getAllUsers);

// 상세페이지 조회
router.get('/myPage/:userId', profileController.getMyPage);

// 상세페이지 수정
router.patch(
  '/myPage/:userId',
  (res, req, next) => {
    res.locals = { user: { userId: 1 } };
    next();
  },
  upload.single('image'),
  profileController.patchMyPage
);

module.exports = router;
