const express = require('express');
const path = require('path');
require('nodemon');

// const router = express.Router();

module.exports = function(app) {
// define the home page route
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

  // define the survey route
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
};
