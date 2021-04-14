import React, { useState } from 'react';
import Rating from 'react-rating';
import emptyStar from '../../../../../lib/assets/star-empty.png';
import fullStar from '../../../../../lib/assets/star-full.png';

function Stars(props) {
  const [{ stop }] = useState(props);
  const [{ step }] = useState(props);
  const [{ fractions }] = useState(props);
  const [{ initialRating }] = useState(props);
  const [{ readOnly }] = useState(props);
  return (
    <div className="stars">
      <Rating
        stop={stop}
        step={step}
        fractions={fractions}
        initialRating={initialRating}
        readonly={readOnly}
        emptySymbol={<img src={emptyStar} className="icon" alt="" />}
        fullSymbol={<img src={fullStar} className="icon" alt="" />}
      />
    </div>
  );
}

export default Stars;
