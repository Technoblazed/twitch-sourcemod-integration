const logger = require('morgan');
const express = require('express');
const app = express();
const response = express();

app.use(logger('dev'));
app.use('/', response);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;

response.get('/', function(req, res) {
  res.json({});
});
