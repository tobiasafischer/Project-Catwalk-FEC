import React, { useState } from 'react';
import axios from 'axios';

import ReviewsList from './components/reviews-list';

const Review = () => {
  const getReviews = () => {
    axios.get('http://localhost:3000/reviews')
      .then((res) => {
        const reviews = res.results;
        console.log(reviews);
      });
  };
  const [reviews, setReviews] = useState(getReviews);
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
)};

export default Review;
