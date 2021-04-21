/* eslint-disable react/prop-types */
import React from 'react';
import pics from '../../../../overviewdata.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'


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
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='https://images.unsplash.com/photo-1614349164218-1e05fe55b825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80' className="d-block w-100" alt="..."></img>
            </div>›
            {
              this.state.data.map((pic, index) => {
                return (
                  <div className="carousel-item" key={index}>
                    <img src={pic} className="d-block w-100" alt="..."></img>
                  </div>
                )
              })
            }
          </div>
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
      </div>
    )
  }
}

export default ImageGallery;