// require express
const express = require('express');

// instantiate server
const server = express();

// direct to listening port 
const port = 8000;
server.listen(port, () => console.log('API is running on port 8000.'));


