import React, { useState } from 'react';
import Stars from './stars';

function roundStars(star) {
  return Math.floor(star * 4);
}

function ReviewTile(props) {
  // refactor to use ref so it only rerenders on stars change --> memoize the roundStars
  const [{ stars }] = useState(props);
  const [starsRounded] = useState(() => roundStars(stars));
  console.log(stars);
  return (
    <div className="review-tile">
      <Stars stop={20} step={4} fractions={4} initialRating={starsRounded} readonly="true" />
    </div>
  );
}

export default ReviewTile;
