// create webserver
const http = require("http");
const { executeCommand } = require("./lib/commands");

const server = http.createServer(function(request, response) {
  if (request.url === "/favicon.ico") {
    return response.end();
  }

  console.log("Requested", request.url);
  if (request.url === "/pin") {
    const secret = executeCommand("asd", "get", "pin");
    response.write(secret);
  } else {
    response.write("Unknown URL");
  }

  response.end();
});

server.listen(7000);

// const url = require("url");

// var fs = require("fs");

// http
//   .createServer(function(req, res) {
//     fs.readFile("secrets.js", "utf8", function(err, contents) {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.write(contents);
//       res.end();
//     });
//   })

//   .listen(7000);
// console.log("Server started");
