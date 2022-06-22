const socketIo = require('socket.io');
const http = require('../app');
const { data } = require('./winston');
const io = socketIo(http, { cors: { origin: '*' } });

module.exports = io.on('connection', function (socket) {
  socket.on('newUser', (name) => {
    socket.name = name;

    io.emit('update', {
      type: 'connect',
      name: socket.name,
      message: '님이 접속하였습니다.',
      count: io.engine.clientsCount,
    });
    console.log(socket.name + ' 님이 접속하였습니다.');
  });

  socket.on('message', (message) => {
    io.emit('update', {
      name: socket.name,
      message,
      count: io.engine.clientsCount,
    });
    console.log(socket.name + ' : ' + message);
    console.log(io.engine.clientsCount + '명 접속중');
  });

  socket.on('disconnect', function () {
    io.emit('update', {
      type: 'disconnect',
      name: socket.name,
      message: '님이 나가셨습니다.',
      count: io.engine.clientsCount,
    });
    console.log(socket.name + '님이 나가셨습니다.');
  });
});
