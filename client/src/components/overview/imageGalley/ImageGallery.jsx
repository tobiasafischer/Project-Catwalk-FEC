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
    this.handleClick = this.handleClick.bind(this);
  }
  goToNext() {
    if (this.state.currentInd < this.state.data.length - 1) {
      this.setState({
        currentInd: this.state.currentInd + 1,
        predisplay: 'button'
      }, () => {
        if (this.state.currentInd === this.state.data.length - 1) {
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
  handleClick(e) {
    this.setState({
      currentInd: Number(e.target.id)
    }, () => { console.log(e.target.id) })
  }
  render() {
    return (
      <div id='img'>
        <Carouse data={this.state.data} currentInd={this.state.currentInd} goToNext={this.goToNext} goToPrevious={this.goToPrevious} predisplay={this.state.predisplay} nextdisplay={this.state.nextdisplay} />
        <ThumbnailPic data={this.state.data} handleClick={this.handleClick} />
        <button className='expand' onClick={this.props.toggleExpand}><FontAwesomeIcon icon={faExpand} /></button>
      </div>
    )
  }
}

export default ImageGallery;