const express = require('express');
const port = 3000;
const app = express();
const Http = require('http');
const http = Http.createServer(app);

module.exports = http;

require('./modules/socket');

const db = require('./models');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const profileRouter = require('./routes/profile.route');
const passwordRouter = require('./routes/password.route');
const userRouter = require('./routes/user.route');
const streamRouter = require('./routes/stream.route');
const errorMiddleware = require('./middlewares/error');

db.sequelize
  .sync()
  .then(() => console.log('🟢 db 연결 성공'))
  .catch(console.error);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', [profileRouter, userRouter, streamRouter, passwordRouter]);

app.use(errorMiddleware);

http.listen(port, () => {
  console.log('🟢', port, '번 포트');
});
