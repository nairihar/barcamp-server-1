var http = require("http");
const PORT = process.env.PORT || 8080;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World\n');
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}`);
