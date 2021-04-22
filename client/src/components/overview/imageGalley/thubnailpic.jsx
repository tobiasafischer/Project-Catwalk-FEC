import React from 'react';

const ThumbnailPic = (props) => {
  return (
    <ul id='thumbnail'>
      {
        props.data.map((pic, index) => {
          return (
            <li id='thumbnail-container' key={index}>
              <img id={index} src={pic} onClick={props.handleClick} />
            </li>
          )
        })
      }
    </ul>
  )
}
export default ThumbnailPic;