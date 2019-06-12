var http = require("http");
const PORT = process.env.PORT || 8080;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'application/json'});
   response.end(JSON.stringify({ message: 'Hello from Server 2' }));
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}`);
