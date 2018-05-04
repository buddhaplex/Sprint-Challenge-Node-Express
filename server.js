// requirements (express, helmet, cors, morgan)
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('cors');
const actionRoutes = require('./data/routes/actionRoutes');
const projectRoutes = require('./data/routes/projectRoutes');
// instantiate server
const server = express();
// direct to listening port 
const port = 8000;

const logger = (req, res) => {
  console.log(`Requested URL: ${req.url}`);
  console.log(`Request Info: ${req.body}`);
}

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use('/api/actions', actionRoutes);
server.use('api/projects', projectRoutes);

server.listen(port, () => console.log('API is running on port 8000.'));