const path = require("path");
const express = require("express");
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const API_KEY = require('../config.js');
const bodyparser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3000);

axios.get(apiUrl + '/products', {
  headers: {
    'Authorization': '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'
  }
})
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

app.get('/products', (req, res) => {
  res.status(200).send(res);
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});
