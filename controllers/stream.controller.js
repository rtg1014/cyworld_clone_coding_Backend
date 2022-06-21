const fs = require('fs');
const randomPlaylist = require('../modules/read_random_playlist');

async function playMusic(req, res) {
  // #swagger.tags = ['profile']
  const filepath = `./static/${randomPlaylist}`;

  const stat = fs.statSync(filepath);
  const fileSize = stat.size;
  const range = req.headers.range;
  console.log(range);
  if (!range) {
    const header = { 'Content-Type': 'audio/mpeg' };

    res.writeHead(200, header);
    res.end();
  } else {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);

    const MAX_CHUNK_SIZE = 500 * 500;
    const _end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const end = Math.min(_end, start + MAX_CHUNK_SIZE - 1);

    const header = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Type': 'audio/mpeg',
      'Content-Length': fileSize - 1,
    };

    res.writeHead(206, header);

    const readStream = fs.createReadStream(filepath, { start, end });

    readStream.pipe(res);
  }
}

module.exports = { playMusic };
