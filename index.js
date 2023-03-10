const http = require('http');

const hostname = '127.0.0.9';
const port = 1234;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Best practices --- requirements for my API
// Use JSON for sending and recibing info