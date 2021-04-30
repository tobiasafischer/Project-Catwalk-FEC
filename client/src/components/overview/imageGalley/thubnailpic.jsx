import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ThumbnailPic(props) {
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
      <ul id='thumbnail'>
        {
          props.data.map((pic, index) => {
            let enlargeStyle = ''
            if (index === props.currentInd) {
              enlargeStyle = 'enlarge'
            }
            return (
              <li id='thumbnail-container' key={index}>
                <img
                  id={index}
                  src={pic.thumbnail_url}
                  onClick={props.handleClick}
                  className={enlargeStyle}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }

}