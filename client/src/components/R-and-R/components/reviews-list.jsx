import React, { useState, useEffect } from 'react';

import ReviewTile from './review-tile';
import ResponseForm from './response-form';

function getTiles(tiles, currentRender, setCurrentRender) {
  const arr = [];
  if (tiles.length >= currentRender.length) {
    for (let i = currentRender.length; i < currentRender.length + 2; i += 1) {
      if (tiles[i]) {
        arr.push(
          <ReviewTile
            key={Math.random().toString(36).substr(2, 9)}
            stars={tiles[i].stars}
            yesDidClick={false}
            reportDidClick={false}
          />,
        );
      }
    }
    setCurrentRender(currentRender.concat(arr));
  }
}

function showMoreButton(tiles, currentRender, setCurrentRender) {
  return (
    <div>
      <a href="#review-button" onClick={() => getTiles(tiles, currentRender, setCurrentRender)} id="review-button">SHOW MORE</a>
    </div>
  );
}

function ReviewsList(props) {
  // const [tilesDisplayed, setTilesDisplayed] = useState(2);
  // const [reviews, setReviews] = useState(() => getReviews());
  const [{ stars }] = useState(props);
  const [currentRender, setCurrentRender] = useState([]);
  useEffect(() => getTiles(stars, currentRender, setCurrentRender), []);
  return (
    <div className="reviews-list">
      {currentRender}
      <div className="d-inline-flex mt-5">
        {showMoreButton(stars, currentRender, setCurrentRender)}
        <ResponseForm />
      </div>
    </div>
  );
}

export default ReviewsList;
