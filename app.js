const express = require('express');
const port = 3000;
const app = express();
const db = require('./models');
const Cors = require('cors');
// const profileRouter = require('./routes/profile.route');
const userRouter = require('./routes/user.route');

db.sequelize
  .sync()
  .then(() => {
    console.log('🟢 db 연결 성공');
  })
  .catch(console.error);

app.use(express.urlencoded());
app.use(express.json());

app.use(Cors());
app.use('/', [userRouter]);

app.listen(port, () => {
  console.log('🟢', port, '번 포트');
});
