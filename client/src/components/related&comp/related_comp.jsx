/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItems from './components/RelatedItems';
import YourOutfit from './components/YourOutfit';
import API_KEY from '../../../../config';
import 'regenerator-runtime/runtime';

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const RelatedItemsAndComparison = () => {
  const [currentId, setCurrentId] = useState(16057);
  const [idArray, setIdArray] = useState([]);
  const [productData, setProductData] = useState([]);
  const [outfitArray, setOutfitArray] = useState([]);
  const [outfitData, setOutfitData] = useState([]);

  const getRelatedData = () => {
    // container for data
    const result = [];
    // gets an array of ids that are related to current item
    axios.get(`${apiURL}/products/${currentId}/related`, { headers: { Authorization: API_KEY } })
      .then(((res) => {
        // iterates through array and makes GET requests at the corresponding ids
        res.data.forEach((id) => {
          const info = axios.get(`${apiURL}/products/${id}`, { headers: { Authorization: API_KEY } });
          const styles = axios.get(`${apiURL}/products/${id}/styles`, { headers: { Authorization: API_KEY } });
          Promise.all([info, styles])
            .then((ress) => {
              result.push({ productInfo: ress[0].data, styleInfo: ress[1].data });
            })
            .catch((err) => {
              throw err;
            });
        });
      }));
    return result;
  };

  const getProductData = () => {
    const result = [];
    // iterates through array and makes GET requests at the corresponding ids
    idArray.forEach((id) => {
      const info = axios.get(`${apiURL}/products/${id}`, { headers: { Authorization: API_KEY } });
      const styles = axios.get(`${apiURL}/products/${id}/styles`, { headers: { Authorization: API_KEY } });
      Promise.all([info, styles])
        .then((res) => {
          result.push({ productInfo: res[0].data, styleInfo: res[1].data });
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setOutfitData(result);
  };

  useEffect(() => setProductData(getRelatedData), []);

  return (
    <div className="allComponents">
      <RelatedItems relatedData={productData} />
      <YourOutfit outfitData={outfitData} />
    </div>
  );
};

export default RelatedItemsAndComparison;
