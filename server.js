// require express
const express = require('express');

// instantiate server
const server = express();

server.get('/', function(req, res) {
  res.json('Api Running...');
});

// direct to listening port 
const port = 8000;
server.listen(port, () => console.log('API is running on port 8000.'));


