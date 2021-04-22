import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewsList from './components/reviews-list';

const Review = () => {
  const [count, setCount] = useState();
  const [page, setPage] = useState();
  const [sort] = useState('helpful');
  const [productId, setProductId] = useState(16056);
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    const params = {
      page,
      count,
      sort,
      product_id: productId,
    };
    axios.get('http://localhost:3000/reviews', { params })
      .then(({ data }) => {
        setCount(data.response.count);
        setPage(data.response.page);
        setProductId(data.response.product);
        setReviews(data.response.results);
      })
      .catch((err) => {
        throw err;
      });
  };
  const validate = () => {
    if (reviews.length > 0) {
      return (
        <ReviewsList
          reviews={reviews}
        />
      );
    }
    return <></>;
  };

  useEffect(() => getReviews(), []);
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      <div id="reviews-list">
        {validate()}
      </div>
    </div>
  );
};

export default Review;
