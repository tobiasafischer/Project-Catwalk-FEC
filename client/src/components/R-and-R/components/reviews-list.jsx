import React, { useState } from 'react';
import ReviewTile from './review-tile';
import ResponseForm from './response-form';
import { Button } from 'react-bootstrap';

// tiles will be [{stars}, {}]
function renderTiles(tiles, currentTile, setCurrentTile) {
  console.log(tiles);
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
    <div className="buttons">
      <div className="container">
        <h1>歪みエフェクト</h1>
        <p>Distortion Effect</p>
        <a href="https://twitter.com/masuwa1018" class="btn effect04" data-sm-link-text="CLICK" target="_blank"><span>MORE REVIEWS</span></a>
      </div>
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
        <button type="button">
          MORE REVIEWS
        </button>
        <ResponseForm />
      </div>
    </div>
  );
}

export default ReviewsList;
