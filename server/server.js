const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const { API_KEY } = require('../config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/';

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(bodyParser.json());

app.listen(3000);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});

app.get('/reviews', (req, res) => {
  const reviewHeader = {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      page: req.query.page || 1,
      count: req.query.count || 5,
      sort: req.query.sort || 'helpful',
      product_id: req.query.product_id || 16056,
    },
  };
  axios.get(`${apiUrl}reviews/`, reviewHeader)
    .then((response) => {
      res.json({ response: response.data });
    })
    .catch(() => {
      // res.sendStatus(500);
      // res.end();
    });
});

app.get('/productById', (req, res) => {
  const reviewHeader = {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      product_id: req.query.product_id || 16056,
    },
  };
  axios.get(`${apiUrl}products/${req.query.product_id}`, reviewHeader)
    .then((response) => {
      res.json({ response: response.data });
    })
    .catch((err) => {
      // res.sendStatus(500);
      // res.end();
    });
});

app.get('/products', (req, res) => {
  const productHeader = {
    headers: {
      Authorization: API_KEY,
    },
  };
  axios.get(`${apiUrl}products/`, productHeader)
    .then((data) => {
      console.log(data.data);
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
