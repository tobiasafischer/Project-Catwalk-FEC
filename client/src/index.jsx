import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './components/R-and-R/r-and-r';
import Overview from './components/overview/overview';

const App = () => {
  const [productId, setProductId] = useState(16153);
  const [product, setProduct] = useState({});

  const getProduct = () => {
    const params = {
      product_id: productId,
    };
    return axios.get('http://localhost:3000/productById', { params })
      .then(({ data }) => data.response)
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getProduct()
      .then((data) => {
        setProduct(data);
      });
  }, []);
  useEffect(() => setProductId(product.id), [product]);
  return (
    <div>
      <Overview
        productId={productId}
        item={product}
      />
      <Review
        productId={productId}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
