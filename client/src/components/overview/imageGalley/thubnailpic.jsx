import React from 'react';

export default function ThumbnailPic(props) {
  return (
    <ul id='thumbnail'>
      {
        props.data.map((pic, index) => {
          return (
            <li id='thumbnail-container' key={index}>
              <img id={index} src={pic.thumbnail_url} onClick={props.handleClick} />
            </li>
          )
        })
      }
    </ul>
  )
}