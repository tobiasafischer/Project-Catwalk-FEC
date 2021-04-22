import React from 'react';
import ReviewsList from './components/reviews-list';
import axios from 'axios';

const Review = () => {
  const getReviews = () => {

  };
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
