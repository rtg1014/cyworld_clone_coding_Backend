const express = require('express');
const auth = require('../middlewares/auth-middelware');
const streamController = require('../controllers/stream.controller');

require('express-async-errors');

const router = express.Router();

// 내 페이지 조회
router.get('/playlists/:musicId', streamController.playMusic);

module.exports = router;
