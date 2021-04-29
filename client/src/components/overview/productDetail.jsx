import React from 'react';
import Star from './productdetail/starRating.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = (props) => {
  return (
    <div id='detail' >

      <div className="rating">
        <Star className='star' />
        <a href='#'>Read all reviews</a>
      </div>
      <h5 className='category'>{props.category}</h5>
      <h2 className='productName'>{props.name}</h2>
      <div className='price'>${props.currentstyle.original_price.slice(0, 3)}</div>
      <div className='share'>
        <button className='sharebutton'>
          <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
          <a>SHARE</a>
          <div className='sharebox'>

          </div>
        </button>
      </div>
      <div className='style'>
        <h5>style &gt;
          <span> {props.currentstyle.name}</span>
        </h5>
        <div className='styleOpt'>
          {props.styles.map((style, index) => {
            let enlargeCSS = '';
            if (index === props.styleId) {
              enlargeCSS = 'enlarge'
            }
            return (
              <span className={enlargeCSS}>
                <img
                  id={index}
                  key={index}
                  src={style.photos[0].thumbnail_url} onClick={props.handleSelector}
                />
              </span>)
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
      <div className='detailButtons'>
        <button className='addtoCart'>ADD TO BAG</button>
        <button className='save'>☆</button>
      </div>

    </div>
  )
}

export default ProductDetail;