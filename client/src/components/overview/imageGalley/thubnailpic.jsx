import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ThumbnailPic = (props) => {
  if (props.expand) {
    return (
      <ul id='thumbnail-expand'>
        {
          props.data.map((item, index) => {
            return (
              <li id='thumbnail-container' key={index}>
                <button
                  id={index}
                  className='expandIcon'
                  onClick={props.handleClick}>
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  } else {
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
