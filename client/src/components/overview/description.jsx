import React from 'react';

const Description = (props) => {
  return (
    <div id='descrip'>
      <div className='row'>
        <div className='col-7 left'>
          <p>{props.item.description}</p>
        </div>
        <div className='col-5 right'>
          <p>{props.item.slogan}</p>
        </div>
      </div>
    </div>
  )
}

export default Description;