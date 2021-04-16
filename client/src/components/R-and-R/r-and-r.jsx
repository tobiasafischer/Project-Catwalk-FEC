import React from 'react';
import ReviewsList from './components/reviews-list';

function Review() {
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      {/* ReviewsList instantiation */}
      <div id="reviews-list">
        <ReviewsList tiles={[{ stars: 2 }, { stars: 4 }]} />
      </div>
    </div>
  );
}

export default Review;
