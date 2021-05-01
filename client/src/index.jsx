import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './components/R-and-R/r-and-r';

const App = () => {
  const [productId, setProductId] = useState(16153);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const params = {
      product_id: productId,
    };
    return axios.get('productById', { params })
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
      <div>
        <Review
          key={productId}
          productId={productId}
        />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
