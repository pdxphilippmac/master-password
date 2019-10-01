// create webserver
const http = require("http");
const { get } = require("./lib/commands");

const server = http.createServer(function(request, response) {
  // use url.parse to seperate url to pathname and search
  if (request.url === "/favicon.ico") {
    return response.end();
  }
  if (request.url === "/") {
    return response.end("Welcome to my Password Manager");
  }
  console.log(request.url);

  try {
    const path = request.url.slice(1);
    const secret = get("asd", path);

    response.write(secret);
  } catch (error) {
    response.write("Can not read secret");
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
