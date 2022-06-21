const express = require('express');
const router = express.Router();
const passwordFInd = require('../controllers/passwordFInd.controller');

// 비밀번호 분실시 이메일 발송 test
router.post('/send/pw', passwordFInd.controller.sendPw);

router.post('/search/id', passwordFInd.controller.search.id);

router.post('/search/pw', passwordFInd.controller.search.pw);

module.exports = router;
