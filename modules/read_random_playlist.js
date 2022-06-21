const fs = require('fs');

const folder = './static/';
const arr = fs.readdirSync(folder);

const num = arr.length;
const randomIdx = Math.floor(Math.random() * num);

module.exports = arr[randomIdx];
