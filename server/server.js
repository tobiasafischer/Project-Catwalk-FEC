const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const API_KEY = require('../config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax43/';

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());


app.listen(3000);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});

app.get('/reviews', (req, res) => {
  axios.get(`${apiUrl}/reviews/`)
    .then((data) => {
      console.log(data.results);
      res.sendStatus(201);
    });
});
