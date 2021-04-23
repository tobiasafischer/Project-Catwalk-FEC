import React from 'react';
import Star from './productdetail/starRating.jsx'

const ProductDetail = (props) => {
  return (
    <div id='detail'>
      <div className="rating">
        <Star className='star' />
        <a href='#'>Read all reviews</a>
      </div>

      <h5 className='category'>{props.category}</h5>
      <h2 className='productName'>{props.name}</h2>
      <div className='price'>${props.currentstyle.original_price.slice(0, 3)}</div>
      <div className='style'>
        <h5>style &gt;
          <span> select style</span>
        </h5>
        <div className='styleOpt'>
          {props.styles.map((style, id) => {
            return <span><img id={id} key={id} src={style.photos[0].thumbnail_url} onClick={props.handleSelector} /></span>
          })}
        </div>
      </div>
      <div className='selectors'>
        <select className='sizeSelector'>
          <option>SELECT SIZE</option>
          {Object.values(props.currentstyle.skus).map((item, index) => {
            return (
              <option>{item.size}</option>
            )
          })}
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