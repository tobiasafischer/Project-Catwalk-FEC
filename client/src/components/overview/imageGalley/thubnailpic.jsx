import React from 'react';

const ThumbnailPic = (props) => {
  return <div>
    {
      props.data.map((pic, index) => {
        return (
          <img src={pic} className='img-thumbnail' />
        )
      })
    }
  </div>

}
export default ThumbnailPic;