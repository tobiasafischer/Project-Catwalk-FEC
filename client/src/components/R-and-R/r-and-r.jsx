import React from 'react';
import ReviewsList from './components/reviews-list';

function Review() {
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
      {/* ReviewsList instantiation */}
      <div id="reviews-list">
        <ReviewsList stars={[{ stars: 1 }, { stars: 6 }, { stars: 2 }, { stars: 4 }].splice(3)} />
      </div>
    </div>
  );
}

export default Review;
