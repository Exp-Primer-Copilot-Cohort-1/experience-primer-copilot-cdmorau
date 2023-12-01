// create a web server with node.js
// run with: node comment.js
// then visit: http://localhost:8080/

var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  console.log("opening "+ROOT_DIR+urlObj.pathname);
  fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');