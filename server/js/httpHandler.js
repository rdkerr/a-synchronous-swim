const headers = require('./cors');
const messages = require('./messageQueue');

const validMessages = ['left', 'right', 'up', 'down'];

module.exports = (req, res) => {
  res.writeHead(200, headers);
  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    var direction = messages.dequeue();
    direction = direction === undefined ? validMessages[Math.floor(Math.random() * 4)] : direction;
    res.end(direction);
  }

};


