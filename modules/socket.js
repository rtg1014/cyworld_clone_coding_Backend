const socketIo = require('socket.io');
const http = require('../app');
const { data } = require('./winston');
const io = socketIo(http, { cors: { origin: '*' } });

const checkCounts = (room) => io.sockets.adapter.rooms.get(room)?.size || 0;

module.exports = io.on('connection', function (socket) {
  socket.emit('search', {
    rooms: [
      ...new Set(
        [...io.sockets.adapter.sids.values()].map((data) => [...data][1])
      ),
    ],
  });

  socket.on('newUser', (data) => {
    socket.name = data.name;
    socket.room = data.room;

    socket.join(socket.room);
    console.log([
      ...new Set(
        [...io.sockets.adapter.sids.values()].map((data) => [...data][1])
      ),
    ]);
    io.to(socket.room).emit('update', {
      type: 'connect',
      name: socket.name,
      message: '님이 접속하였습니다.',
      count: checkCounts(socket.room),
    });
    console.log(socket.name + ' 님이 접속하였습니다.');
    console.log(checkCounts(socket.room) + '명 접속중');
  });

  socket.on('message', (message) => {
    io.to(socket.room).emit('update', {
      name: socket.name,
      message,
      count: checkCounts(socket.room),
    });
    console.log(socket.name + ' : ' + message);
    console.log(checkCounts(socket.room) + '명 접속중');
  });

  socket.on('disconnect', () => {
    socket.leave(socket.room);

    io.to(socket.room).emit('update', {
      type: 'disconnect',
      name: socket.name,
      message: '님이 나가셨습니다.',
      count: checkCounts(socket.room),
    });
    console.log(socket.name + '님이 나가셨습니다.');
    console.log(checkCounts(socket.room) + '명 접속중');
  });
});
