import React, { useState } from 'react';
import Rating from 'react-rating';
import emptyStar from '../../../../../lib/assets/star-empty.png';
import fullStar from '../../../../../lib/assets/star-full.png';

function renderStars(stop, step, fractions, initialRating, readonly) {
  return (
    <div id="stars">
      <Rating
        stop={stop}
        step={step}
        fractions={fractions}
        initialRating={initialRating}
        readonly={readonly}
        emptySymbol={<img src={emptyStar} className="icon" alt="" />}
        fullSymbol={<img src={fullStar} className="icon" alt="" />}
      />
    </div>
  );
}

function Stars() {
  const [stop] = useState(5);
  const [step] = useState(1);
  const [fractions] = useState(1);
  const [initialRating] = useState(5);
  const [readOnly] = useState(false);

  return (
    <div className="stars">
      {renderStars(stop, step, fractions, initialRating, readOnly)}
    </div>
  );
}

export default Stars;
