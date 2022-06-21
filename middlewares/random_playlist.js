const fs = require('fs');

function playlistMiddleware(req, res, next) {
  const folder = './static/';
  const playlists = fs.readdirSync(folder);

  const num = playlists.length;
  const randomIdx = Math.floor(Math.random() * num);

  res.locals.playlist = playlists[randomIdx];

  next();
}

module.exports = playlistMiddleware;
