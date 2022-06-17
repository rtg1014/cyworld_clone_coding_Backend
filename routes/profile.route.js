const express = require('express');
const auth = require('../middlewares/auth-middelware');
const { upload } = require('../modules/multer');
const profileController = require('../controllers/profile.controller');

require('express-async-errors');

const router = express.Router();

router.get('/lobby', profileController.getAllUsers);

router.get('/myPage/:userId', profileController.getMyPage);

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
