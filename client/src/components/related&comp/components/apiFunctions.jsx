/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import API_KEY from '../../../../../config';
import 'regenerator-runtime/runtime';

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const apiFunc = {

  getProductData: (array) => {
    const promises = [];

    array.forEach((id) => {
      promises.push(new Promise((resolve, reject) => {
        axios.get(`${apiURL}/products/${id}`, { headers: { Authorization: API_KEY } })
          .then((info) => {
            axios.get(`${apiURL}/products/${id}/styles`, { headers: { Authorization: API_KEY } })
              .then((styles) => {
                resolve({ info, styles });
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((err) => {
            reject(err);
          });
      }));
    });
    return Promise.all(promises)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },
};

export default apiFunc;
