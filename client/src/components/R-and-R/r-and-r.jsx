import React from 'react';
import ReviewsList from './components/reviews-list';

function Review() {
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      {/* ReviewsList instantiation */}
      <ReviewsList />
    </div>
  );
}

export default Review;
