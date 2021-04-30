/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItems from './components/RelatedItems';
import YourOutfit from './components/YourOutfit';
import 'regenerator-runtime/runtime';

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const RelatedItemsAndComparison = () => {
  const [currentId, setCurrentId] = useState(16057);
  const [idArray, setIdArray] = useState([]);
  const [productData, setProductData] = useState([]);
  const [outfitArray, setOutfitArray] = useState([]);
  const [outfitData, setOutfitData] = useState([]);

  const getRelatedData = () => {
    const params = {
      id: currentId,
    };
    return axios.get('http://localhost:3000/related', params)
      .then((result) => result);
  };

  /* const getProductData = () => {
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
          throw err;
        });
    });
    setOutfitData(result);
  }; */

  useEffect(() => {
    getRelatedData()
      .then((res) => {
        setProductData(res);
      });
  }, []);

  return (
    <div className="allComponents">
      <RelatedItems relatedData={productData} />
      <YourOutfit outfitData={outfitData} />
    </div>
  );
};

export default RelatedItemsAndComparison;
