import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Stars from './stars';

function ReviewTile(props) {
  // refactor to use ref so it only rerenders on stars change --> memoize the roundStars

  function roundStars(star) {
    return Math.floor(star * 4);
  }

  const [{ stars }] = useState(props);
  const [starsRounded] = useState(() => roundStars(stars));
  const [{ title }] = useState(props);
  const [{ body }] = useState(props);
  const [positiveReviews, setPositiveReviews] = useState(0);
  const [reportCount, setReportCount] = useState(0);

  return (
    <div className="review-tile">
      <Card style={{ color: '#000' }}>
        <Stars stop={20} step={4} fractions={4} initialRating={starsRounded} readonly="true" />
        <div className="mt-3" id="review-text-container">
          <Card.Title>
            { title }
            <strong>This is the title of my review</strong>
          </Card.Title>
          <Card.Text>
            { body }
            d this is the text of my review. and this is the texthe ndthis is the text of my review.
          </Card.Text>
          <div className="d-sm-inline-flex justify-content-sm-between" id="helpful">
            <div id="helpful-text" className="ml-auto p-2">Helpful?</div>
            <div id="helpful-text" className="ml-auto p-2" onClick={() => setPositiveReviews(positiveReviews + 1)} aria-hidden="true">
              <u>Yes</u>
              (
              {positiveReviews}
              )
            </div>
            <div className="ml-auto p-2">|</div>
            <div id="helpful-text" className="ml-auto p-2" onClick={() => setReportCount(reportCount + 1)} aria-hidden="true">
              Report
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ReviewTile;
