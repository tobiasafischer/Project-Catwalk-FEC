import React, { useState } from 'react';

import ReviewTile from './review-tile';
import ResponseForm from './response-form';

// tiles will be [{stars}, {}]
function renderTiles(tiles, currentTile, setCurrentTile) {
  const newArr = tiles.splice(0, currentTile);
  if (tiles.length - 1 > currentTile) {
    setCurrentTile(currentTile + 2);
  }
  return newArr;
}

function getTiles(tiles) {
  const arr = [];
  for (let i = 0; i < tiles.length; i += 1) {
    arr.push(
      <ReviewTile
        key={i}
        stars={tiles[i].stars}
        yesDidClick={false}
        reportDidClick={false}
      />,
    );
  }
  return arr;
}

function showMoreButton() {
  return (
    <div>
      <a href="#review-button" id="review-button">SHOW MORE</a>
    </div>
  );
}

function ReviewsList(props) {
  // const [tilesDisplayed, setTilesDisplayed] = useState(2);
  // const [reviews, setReviews] = useState(() => getReviews());
  const [{ stars }] = useState(props);
  const [tiles] = useState(getTiles(stars));
  const [currentTile, setCurrentTile] = useState(0);
  return (
    <div className="reviews-list">
      {renderTiles(tiles, currentTile, setCurrentTile)}
      <div className="d-inline-flex mt-5">
        {showMoreButton()}
        <ResponseForm />
      </div>
    </div>
  );
}

export default ReviewsList;
