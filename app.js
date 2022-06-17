const express = require('express');
const port = 4000;
const app = express();
const cors = require('cors');
const profileRouter = require('./routes/profile.route');
const userRouter = require('./routes/user.route');
const errorMiddleware = require('./middlewares/error');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', [profileRouter]);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log('🟢', port, '번 포트');
});
