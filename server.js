const express = require('express');
const { handleError } = require('./helpers')
const router = require('./routes')

const server = express();

server.get('/', (req, res, next) => {
  return res.status(200).json('welcome')
})

server.use(express.json());
server.use('/api', router)
server.use((err, req, res, next) => {
  handleError(err, res);
});
module.exports = server;