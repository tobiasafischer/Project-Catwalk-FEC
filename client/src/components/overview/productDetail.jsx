/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import Star from './productdetail/starRating';

const ProductDetail = (props) => {
  const [{ category }] = useState(props);
  const [{ name }] = useState(props);
  const [{ currentstyle }] = useState(props);
  const [{ styleId }] = useState(props);
  const [{ styles }] = useState(props);
  const [{ handleSelector }] = useState(props);
  return (
    <div id="detail">
      <div className="rating">
        <Star className="star" />
        <a href="#star-icon">Read all reviews</a>
      </div>
      <h5 className="category">{category}</h5>
      <h2 className="productName">{name}</h2>
      <div className="price">
        {currentstyle.original_price.slice(0, 3)}
      </div>
      <div className="share">
        <button type="button" className="sharebutton">
          <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
          <a>SHARE</a>
          <div className="sharebox" />
        </button>
      </div>
      <div className="style">
        <h5>
          style &gt;
          <span>
            {' '}
            {currentstyle.name}
          </span>
        </h5>
        <div className="styleOpt">
          {styles.map((style, index) => {
            let enlargeCSS = '';
            if (index === styleId) {
              enlargeCSS = 'enlarge';
            }
            return (
              <span className={enlargeCSS}>
                <img
                  id={index}
                  key={JSON.stringify(style.photos[0].thumbnail_url)}
                  alt="img"
                  src={style.photos[0].thumbnail_url}
                  onClick={handleSelector}
                />
              </span>
            );
          })}
        </div>
      </div>
      <div className="selectors">
        <select className="sizeSelector">
          <option>SELECT SIZE</option>
          {Object.values(currentstyle.skus).map((item) => (
            <option>{item.size}</option>
          ))}
        </select>
        <select className="quantitySelector">
          <option>1</option>
        </select>
      </div>
      <div className="detailButtons">
        <button type="button" className="addtoCart">ADD TO BAG</button>
        <button type="button" className="save">☆</button>
      </div>

    </div>
  );
};

export default ProductDetail;
