import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewsList from './components/reviews-list';

const Review = () => {
  const [count, setCount] = useState();
  const [page, setPage] = useState();
  const [sort, setSort] = useState('helpful');
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

  useEffect(() => getReviews(), []);
  console.log(count, page, sort, productId, reviews);
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      <div id="reviews-list">
        <ReviewsList
          stars={[
            { stars: 1 },
            { stars: 6 },
            { stars: 2 },
            { stars: 4 },
          ]}
        />
      </div>
    </div>
  );
};

export default Review;
