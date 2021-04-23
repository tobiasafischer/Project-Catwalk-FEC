import React, { useState, useEffect } from 'react';

import ReviewTile from './review-tile';
import ResponseForm from './response-form';

const ReviewsList = (props) => {
  const [{ reviews }] = useState(props);
  const [{ product }] = useState(props);
  const [currentRender, setCurrentRender] = useState([]);

  const getTiles = () => {
    const arr = [];
    if (reviews.length >= currentRender.length) {
      for (let i = currentRender.length; i < currentRender.length + 2; i += 1) {
        if (reviews[i]) {
          arr.push(
            <ReviewTile
              key={Math.random().toString(36).substr(2, 9)}
              body={reviews[i].body}
              date={reviews[i].date}
              helpfulness={reviews[i].helpfulness}
              photos={reviews[i].photos}
              rating={reviews[i].rating}
              recommended={reviews[i].recommended}
              response={reviews[i].response}
              reviewId={reviews[i].review_id}
              reviewerName={reviews[i].reviewer_name}
              summary={reviews[i].summary}
              yesClicked={false}
            />,
          );
        }
      }
      setCurrentRender(currentRender.concat(arr));
    }
  };
  useEffect(() => getTiles(), []);
  product
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
        <ResponseForm
          product={product}
        />
      </div>
    </div>
  );
};

export default ReviewsList;
