const socketIo = require('socket.io');
const http = require('../app');
const io = socketIo(http, { cors: { origin: '*' } });

const checkCounts = (room) => io.sockets.adapter.rooms.get(room)?.size || 0;

module.exports = io.on('connection', function (socket) {
  let { name, room } = socket;

  socket.emit('search', {
    rooms: [
      ...new Set(
        [...io.sockets.adapter.sids.values()].map((data) => [...data][1])
      ),
    ],
  });

  socket.on('newUser', (data) => {
    name = data.name;
    room = data.room;

    socket.join(room);

    console.log([
      ...new Set(
        [...io.sockets.adapter.sids.values()].map((data) => [...data][1])
      ),
    ]);

    io.to(room).emit('update', {
      type: 'connect',
      name,
      count: checkCounts(room),
    });
    console.log(`${name}님이 참가했습니다. (총 ${checkCounts(room)}명)`);
  });

  socket.on('message', (message) => {
    io.to(room).emit('update', {
      type: 'message',
      name,
      message,
      count: checkCounts(room),
    });
    console.log(`${name} : ${message} (총 ${checkCounts(room)}명)`);
  });

  socket.on('disconnect', () => {
    socket.leave(room);

    io.to(room).emit('update', {
      type: 'disconnect',
      name,
      count: checkCounts(room),
    });
    console.log(`${name}님이 나갔습니다. (총 ${checkCounts(room)}명)`);
  });
});
