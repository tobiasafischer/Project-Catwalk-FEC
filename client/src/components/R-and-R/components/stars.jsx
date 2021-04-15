import React, { useState } from 'react';
import Rating from 'react-rating';

function Stars(props) {
  const [{ stop }] = useState(props);
  const [{ step }] = useState(props);
  const [{ fractions }] = useState(props);
  const [{ initialRating }] = useState(props);
  const [{ readOnly }] = useState(props);
  const [{ quiet }] = useState(props);
  return (
    <div className="stars">
      <Rating
        stop={stop}
        step={step}
        fractions={fractions}
        initialRating={initialRating}
        readonly={readOnly}
        emptySymbol={<i id="star-icon" className="bi bi-star" />}
        fullSymbol={<i id="star-icon" className="bi bi-star-fill" />}
        quiet={quiet}
      />
    </div>
  );
}

export default Stars;
