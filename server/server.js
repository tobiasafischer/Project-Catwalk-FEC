const path = require("path");
const express = require("express");
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const API_KEY = require('../config.js');
const bodyparser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3000, () => console.log('Listening on ' + 3000));

// axios.get(apiUrl + '/products/16056/styles', {
//   headers: API_KEY
// })
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

app.get('/products', (req, res) => {
  res.status(200).send(res);
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});
