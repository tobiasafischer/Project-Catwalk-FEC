/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const ThumbnailPic = (props) => {
  const [{ expand }] = useState(props);
  const [{ data }] = useState(props);
  const [{ currentInd }] = useState(props);
  const [{ handleClick }] = useState(props);

  if (expand) {
    return (
      <ul id="thumbnail-expand">
        {
          data.map((pic, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li id="thumbnail-container" key={index}>
              <a href="#" className="expandIcon">*</a>
            </li>
          ))
        }
      </ul>
    );
  }
  return (
    <ul id="thumbnail">
      {
        data.map((pic, index) => {
          let enlargeStyle = '';
          if (index === currentInd) {
            enlargeStyle = 'enlarge';
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li id="thumbnail-container" key={index}>
              <img
                id={index}
                src={pic.thumbnail_url}
                onClick={handleClick}
                className={enlargeStyle}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default ThumbnailPic;
