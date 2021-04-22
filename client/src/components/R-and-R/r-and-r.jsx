import React from 'react';
import ReviewsList from './components/reviews-list';

const Review = () => (
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

export default Review;
