var http = require('http');
http.createServer(function (req, res) {
  res.write("I'm Xiety || Uptime!!");
  res.end();
}).listen(8080);
