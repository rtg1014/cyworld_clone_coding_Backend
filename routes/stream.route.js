const express = require('express');
const streamController = require('../controllers/stream.controller');

require('express-async-errors');

const router = express.Router();

// 음악 듣기
router.get('/playlists/:playlist', streamController.playMusic);

module.exports = router;
