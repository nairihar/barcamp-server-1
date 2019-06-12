const http = require('http');
const request = require('request');
const PORT = process.env.PORT || 8081;
const S2_URL = process.env.PORT || 'http://0.0.0.0:8082';

http.createServer((req, res) => {
   console.log('BS1: request received');
   request(S2_URL, (err, response, body) => {
      if (err) {
         throw err;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`${body}, processed by server 1 \n`);
    });
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}`);
