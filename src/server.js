// create webserver
const http = require("http");
const url = require("url");
const fs = require("fs");
const { get } = require("./lib/commands");

const server = http.createServer(function(request, response) {
  const { pathname } = url.parse(request.url);

  if (pathname === "/favicon.ico") {
    response.writeHead(404);
    return response.end();
  }
  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const content = fs.readFileSync("src/view/index.html", "utf-8");
    return response.end(content);
  }

  console.log(pathname);
  try {
    const path = pathname.slice(1);
    const secret = get("asd", path);

    response.write(secret);
  } catch (error) {
    response.write("Can not read secret");
  }

  response.end();
});

server.listen(8080, () => {
  console.log("Server listens on http://localhost:8080");
});

// const address = "http://localhost:3000";
// const parsedURL = url.parse(address, true, false);
// console.log(`this is host ` + parsedURL.host);
// console.log(`this is pathname` + parsedURL.pathname);
// console.log(`this is path ` + parsedURL.path);

// const server = http.createServer(function(request, response) {
// use url.parse to seperate url to pathname and search#
//
// //
// request.url.parse(
//   urlStr,
//   (parseQueryString = false),
//   (slashesDenoteHost = false)
// );

// url.parse(request.url).pathname;

//

//
// OLD VERSION START

//   if (request.url === "/favicon.ico") {
//     return response.end();
//   }
//   if (request.url === "/") {
//     return response.end("Welcome to my Password Manager");
//   }
//   console.log(request.url);

//   try {
//     const path = request.url.slice(1);
//     const secret = get("asd", path);
//     const parsedPath = url.parse(path);
//     const pathName = parsedPath.pathname;
//     console.log(pathName);

//     response.write(secret);
//   } catch (error) {
//     response.write("Can not read secret");
//   }

//   response.end();
// });

// server.listen(7000);

// OLD VERSION END

// READ FILE

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
