const path = require("path");
const express = require("express");
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax43/';
const API_KEY = require('../config.js');
const bodyparser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3000, () => console.log('Listening on ' + 3000));

