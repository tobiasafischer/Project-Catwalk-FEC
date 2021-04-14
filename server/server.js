const path = require("path");
const express = require("express");
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax43/';
const API_KEY = require('../config.js');

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3000);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});
