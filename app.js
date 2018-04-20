const express = require('express');
const app = express();
const api = express.Router();
const database = require('./dbconfig/database');
const secrets = require('./dbconfig/secrets');
const server = require('http').Server(app);

require('./configurations')(app, express);
database.connect();


module.exports = {
  app,
  server
}
