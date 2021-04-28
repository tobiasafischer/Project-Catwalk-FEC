import React, { useState } from 'react';

const ReviewSpread = (props) => {
  const [{ ratingBreakdown }] = useState(props);
  const [{ recommendation }] = useState(props);
  const [color, setColor] = useState('#454545');

  const populateBar = () => {
    const arr = [];
    for (let i = 1; i < 6; i += 1) {
      const emptyBar = {
        marginLeft: '20px',
        marginTop: '7px',
        height: 10,
        width: '70%',
        backgroundColor: '#959595',
      };

      const fillerBar = {
        height: '100%',
        backgroundColor: color,
        width: `${ratingBreakdown[i] * 20}%`,
      };
      arr.push(
        <div
          key={i}
          style={{
            display: 'flex',
            marginTop: '30px',
          }}
        >
          <div style={{
            position: 'relative',
            fontSize: '15px',
          }}
          >
            <u>
              {i}
              {' '}
              Stars
            </u>
          </div>
          <div style={emptyBar}>
            <div
              style={fillerBar}
              onMouseEnter={() => setColor('green')}
              onMouseLeave={() => setColor('#454545')}
            />
          </div>
        </div>,
      );
    }
    return arr;
  };
  // className="d-inline-flex justify-content-end"
  return (
    <div>
      <div style={{ width: '100%' }}>
        <p style={{ fontSize: '15px' }}>
          {recommendation}
          % of reviews recommend this product
        </p>
      </div>
      <div style={{
        height: '80%',
        width: '100%',
      }}
      >
        {populateBar()}
      </div>

    </div>
  );
};

export default ReviewSpread;
