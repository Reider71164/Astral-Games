const createServer = require('@tomphttp/bare-server-node');
const http = require('http');
const nodeStatic = require('node-static');
const port = process.env.PORT || 8080;

const bare = createServer('/bare/');

// Serve static files from the root directory
const serve = new nodeStatic.Server('./');

const server = http.createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    // Serve static files from root directory
    serve.serve(req, res, (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error serving static file: ${err.message}`);
      }
    });
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen({
  port: port,
});

console.log(`Listening on http://localhost:${port}`);
