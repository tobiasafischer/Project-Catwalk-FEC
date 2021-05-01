import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

const Review = lazy(() => import('./components/R-and-R/r-and-r'));
const renderloader = () => <p>Loading...</p>;

const App = () => {
  const [productId, setProductId] = useState(16153);
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [dropDown, setDropDown] = useState([]);

  const getProduct = () => {
    const params = {
      product_id: productId,
    };
    return axios.get('productById', { params })
      .then(({ data }) => data.response)
      .catch((err) => {
        throw err;
      });
  };

  const getRelated = () => {
    const params = {
      product_id: productId,
    };
    return axios.get('related', { params })
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  };

  const populateDropDown = () => related.map((id) => (
    <Dropdown.Item onClick={() => setProductId(id)}>{id}</Dropdown.Item>
  ));

  useEffect(() => {
    getProduct()
      .then((data) => {
        setProduct(data);
      });
    getRelated()
      .then((id) => {
        setRelated(id);
      });
  }, []);

  useEffect(() => setProductId(product.id), [product]);
  useEffect(() => setDropDown(populateDropDown()), [related]);

  return (
    <div>
      <Suspense fallback={renderloader()}>
        <div style={{ backgroundColor: '#454545' }}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Products"
            variant="secondary"
          >
            {dropDown}
          </DropdownButton>
        </div>
        <div>
          <Review
            key={productId}
            productId={productId}
          />
        </div>
      </Suspense>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
