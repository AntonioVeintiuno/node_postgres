/* eslint-disable import/order */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes');
// const server = require('http').Server(app);

if (process.env.NODE_ENV === 'production') {
  // some action
}

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'token, Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, x-chat-id, X-ACCESS',
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = {
  app,
};
