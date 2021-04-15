import React, { useState } from 'react';
import Stars from './stars';

function roundStars(star) {
  return Math.floor(star * 4);
}

function ReviewTile(props) {
  // refactor to use ref so it only rerenders on stars change --> memoize the roundStars
  const [{ stars }] = useState(props);
  const [starsRounded] = useState(() => roundStars(stars));
  const [{ title }] = useState(props);
  const [{ body }] = useState(props);
  const [positiveReviews, setPositiveReviews] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  return (
    <div className="review-tile">
      <Stars stop={20} step={4} fractions={4} initialRating={starsRounded} readonly="true" />
      <div id="review-text-container">
        <h1>{ title }</h1>
        <p>{ body }</p>
        <div id="helpful">
          <p>Helpful?</p>
          <div id="helpful-yes" onClick={() => setPositiveReviews(positiveReviews + 1)} aria-hidden="true">
            Yes (
            {positiveReviews}
            )
          </div>
          <p>   |   </p>
          <div id="report" onClick={() => setReportCount(reportCount + 1)} aria-hidden="true">
            Report
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTile;
