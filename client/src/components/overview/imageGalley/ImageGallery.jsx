/* eslint-disable react/prop-types */
import React from 'react';
import pics from '../../../../../overviewdata.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import Carouse from './carouse.jsx';
import ThumbnailPic from './thubnailpic.jsx';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: pics
    }
  }
  render() {
    return (
      <div id='img'>
        <Carouse data={this.state.data} />
        {/* <ThumbnailPic data={this.state.data} /> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <button className='expand' onClick={this.props.toggleExpand}><FontAwesomeIcon icon={faExpand} /></button>
      </div>
    )
  }
}

export default ImageGallery;