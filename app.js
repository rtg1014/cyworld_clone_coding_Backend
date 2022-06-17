const express = require('express');
const port = 4000;
const app = express();
const Cors = require('cors');
const profileRouter = require('./routes/profile.route');
const userRouter = require('./routes/user.route');

app.use(express.urlencoded());
app.use(express.json());

app.use(Cors());
app.use('/', [userRouter, profileRouter]);

app.listen(port, () => {
  console.log('🟢', port, '번 포트');
});
