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
      data: pics,
      currentInd: 0,
      predisplay: 'button',
      nextdisplay: 'button'
    }
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
  }
  goToNext() {
    if (this.state.currentInd < this.state.data.length - 1) {
      this.setState({
        currentInd: this.state.currentInd + 1,
        predisplay: 'button'
      }, () => {
        if (this.state.currentInd = this.state.data.length - 1) {
          this.setState({
            nextdisplay: 'hidden'
          })
        }
      })
    }
  }
  goToPrevious() {
    if (this.state.currentInd > 0) {
      this.setState({
        currentInd: this.state.currentInd - 1,
        nextdisplay: 'button'
      }, () => {
        if (this.state.currentInd === 0) {
          this.setState({
            predisplay: 'hidden'
          })
        }
      })
    }
  }

  render() {
    return (
      <div id='img'>
        <Carouse data={this.state.data} currentInd={this.state.currentInd} goToNext={this.goToNext} goToPrevious={this.goToPrevious} predisplay={this.state.predisplay} nextdisplay={this.state.nextdisplay} />
        {/* <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <Carouse data={this.state.data} />
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <button className='expand' onClick={this.props.toggleExpand}><FontAwesomeIcon icon={faExpand} /></button> */}
        <button className='expand' onClick={this.props.toggleExpand}><FontAwesomeIcon icon={faExpand} /></button>
      </div>
    )
  }
}

export default ImageGallery;