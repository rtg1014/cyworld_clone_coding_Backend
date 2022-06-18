const socketIo = require('socket.io');
const http = require('../app');
const io = socketIo(http, { cors: { origin: '*' } });

module.exports = io.on('connection', function (socket) {
  socket.on('newUser', (name) => {
    console.log(name + ' 님이 접속하였습니다.');

    socket.name = name;

    io.emit('update', {
      type: 'connect',
      name: 'SERVER',
      message: name + '님이 접속하였습니다.',
    });
  });

  socket.on('message', (data) => {
    data.name = socket.name;

    io.emit('update', data);
  });

  socket.on('disconnect', function () {
    console.log(socket.name + '님이 나가셨습니다.');

    io.emit('update', {
      type: 'disconnect',
      name: 'SERVER',
      message: socket.name + '님이 나가셨습니다.',
    });
  });
});
