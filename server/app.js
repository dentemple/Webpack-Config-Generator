const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Global Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

/* TODO: Move to cloud service */
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/webpack-config-generator';
mongoose.connect(
  URI,
  { useNewUrlParser: true }
);

mongoose.connection
  .once('open', (err, client) => {})
  .on('error', function(error) {});

// Routers
app.use('/auth', require('./auth/routes'));
app.use('/api', require('./api/routes'));

// Default Route
app.get('*', (_, res) => {
  // Routes all requests to Express from React
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
