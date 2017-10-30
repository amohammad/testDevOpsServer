// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Congratulations: your first Docker image is ready AND running\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://51.254.32.46:8000/");
