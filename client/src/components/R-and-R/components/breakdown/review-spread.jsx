import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const ReviewSpread = (props) => {
  const [{ ratingBreakdown }] = useState(props);
  const [{ recommendation }] = useState(props);

  const populateBar = () => {
    const arr = [];
    for (let i = 1; i < 6; i += 1) {
      const emptyBar = {
        height: 20,
        width: '80%',
        backgroundColor: '#959595',
      };

      const fillerBar = {
        height: '100%',
        backgroundColor: '#454545',
        width: `${ratingBreakdown[i] * 20}%`,
      };
      console.log(fillerBar);
      arr.push(
        <div key={i}>
          <p>
            {i}
            {' '}
            Stars
          </p>
          <div style={emptyBar}>
            <div style={fillerBar} />
          </div>
        </div>,
      );
    }
    return arr;
  };
  // className="d-inline-flex justify-content-end"
  return (
    <div>
      <div>
        <p>
          {recommendation}
          % of reviews recommend this product
        </p>
      </div>
      {populateBar()}

    </div>
  );
};

export default ReviewSpread;
