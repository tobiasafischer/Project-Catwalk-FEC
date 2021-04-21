import React from 'react';
import Star from './productdetail/starRating.jsx'

const ProductDetail = () => {
  return (
    <div id='detail'>
      <div className="rating">
        <Star className='star' />
        <a href='#'>Read all reviews</a>
      </div>

      <h5 className='category'>category</h5>
      <h2 className='productName'>Expanded Product Name</h2>
      <div className='price'>$300</div>
      <div className='style'>
        <h5>style &gt;
          <span> select style</span>
        </h5>
        <div className='styleOpt'>
          <span></span>
          <span></span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='selectors'>
        <select className='sizeSelector'>
          <option>SELECT SIZE</option>
        </select>
        <select className='quantitySelector'>
          <option>1</option>
        </select>
      </div>
      <button className='addtoCart'>ADD TO BAG</button>
      <button className='save'>☆</button>
    </div>
  )
}

export default ProductDetail;