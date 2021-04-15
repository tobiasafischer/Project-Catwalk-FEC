import React, { useState } from 'react';
import ReviewTile from './review-tile';

// tiles will be [{stars}, {}]
function renderTiles(tiles) {
  const arrOfTiles = [];
  for (let i = 0; i < tiles.length; i += 1) {
    // tile instantiation based on # of reviews
    arrOfTiles.push(
      <ReviewTile key={i} stars={tiles[i].stars} yesDidClick={false} reportDidClick={false} />,
    );
  }
  return arrOfTiles;
}

function ReviewsList() {
  // const [tilesDisplayed, setTilesDisplayed] = useState(2);
  // const [reviews, setReviews] = useState(() => getReviews());
  const [tiles] = useState([{ stars: 2 }, { stars: 2 }]);
  return (
    <div className="reviews-list">
      {renderTiles(tiles)}
    </div>
  );
}

export default ReviewsList;
