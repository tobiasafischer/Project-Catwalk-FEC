import React, { useState, useEffect } from 'react';

import ReviewTile from './review-tile';
import ResponseForm from './response-form';

const ReviewsList = (props) => {
  const [{ stars }] = useState(props);
  const [currentRender, setCurrentRender] = useState([]);

  const getTiles = () => {
    const arr = [];
    if (stars.length >= currentRender.length) {
      for (let i = currentRender.length; i < currentRender.length + 2; i += 1) {
        if (stars[i]) {
          arr.push(
            <ReviewTile
              key={Math.random().toString(36).substr(2, 9)}
              stars={stars[i].stars}
              yesDidClick={false}
              reportDidClick={false}
            />,
          );
        }
      }
      setCurrentRender(currentRender.concat(arr));
    }
  };
  useEffect(() => getTiles(), []);

  const showMoreButton = () => (
    <div>
      <a href="#review-button" onClick={() => getTiles()} id="review-button">SHOW MORE</a>
    </div>
  );

  return (
    <div className="reviews-list">
      {currentRender}
      <div className="d-inline-flex mt-5">
        {showMoreButton()}
        <ResponseForm />
      </div>
    </div>
  );
};

export default ReviewsList;
