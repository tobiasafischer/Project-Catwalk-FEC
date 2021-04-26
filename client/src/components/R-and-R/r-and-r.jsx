import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'react-widgets/styles.css';
import DropdownList from 'react-widgets/DropdownList';
import ReviewsList from './components/reviews-list';

const Review = () => {
  const [count, setCount] = useState();
  const [page, setPage] = useState();
  const [sort, setSort] = useState('Relevant');
  const [productId, setProductId] = useState(16060);
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState('');
  const mounted = useRef(true);
  const getReviews = () => {
    const params = {
      page,
      count,
      sort,
      product_id: productId,
    };
    axios.get('http://localhost:3000/reviews', { params })
      .then(({ data }) => {
        if (mounted.current) {
          setCount(data.response.count);
          setPage(data.response.page);
          setProductId(parseInt(data.response.product, 10));
          setReviews(data.response.results);
        }
      })
      .catch((err) => {
        if (mounted.current) {
          throw err;
        }
      });
  };

  const getProduct = () => {
    const params = {
      product_id: productId,
    };
    axios.get('http://localhost:3000/productById', { params })
      .then(({ data }) => {
        if (mounted.current) {
          setProduct(data.response.name);
        }
      })
      .catch((err) => {
        if (mounted.current) {
          throw err;
        }
      });
  };

  const validate = () => {
    if (reviews.length > 0) {
      return (
        <ReviewsList
          reviews={reviews}
          product={product}
          productId={productId}
        />
      );
    }
    return <></>;
  };

  useEffect(() => {
    getReviews();
    getProduct();
    return () => { mounted.current = false; };
  }, [sort]);
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      <div
        id="review-sort"
        style={{
          display: 'flex',
        }}
      >
        <strong
          style={{
            marginTop: '5px',
            marginLeft: '5px',
          }}
        >
          Sort on
        </strong>
        <div
          id="dropdown-list"
          style={{
            marginLeft: '5px',
            marginBottom: '10px',
          }}
        >
          <DropdownList
            defaultValue="Relevant"
            data={['Helpful', 'Newest', 'Relevant']}
            onChange={(val) => setSort(val)}
          />
        </div>
      </div>
      <div id="reviews-list">
        {validate()}
      </div>
    </div>
  );
};

export default Review;
