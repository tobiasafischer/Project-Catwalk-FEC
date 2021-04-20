import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';

function Stars(props) {
  // configuring props for rating component
  const [{ stop }] = useState(props); // # of stars
  const [{ step }] = useState(props); // # of steps --> stop of 10 with step of 2 = 5 stars, 10 half
  const [{ fractions }] = useState(props); // what precision rating you can do -> 4 = quarter stars
  const [{ initialRating }] = useState(props); // how many stars filled out initially
  const [{ readOnly }] = useState(props); // if the user can click
  const [{ quiet }] = useState(props); // if animates on hover
  const [{ handleOnClick }] = useState(props);

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
        onClick={(e) => console.log(e)}
      />
    </div>
  );
}

export default Stars;
