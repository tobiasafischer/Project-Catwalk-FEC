import React from 'react';
import ImageGallery from './imageGalley/ImageGallery.jsx';
import Description from './description.jsx';
import ProductDetail from './productDetail.jsx';
import API_KEY from '../../../../config.js';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false
    }
    this.toggleExpand = this.toggleExpand.bind(this);
    this.handleget = this.handleget.bind(this);
  }
  toggleExpand() {
    this.setState({
      expand: !this.state.expand
    })
  }
  handleget() {
    // axios.get('/products', {
    //   headers: {
    //     'Authorization': API_KEY
    //   }
    // })
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
  // componentDidMount() {
  //   this.handleget()
  // }
  render() {
    if (this.state.expand) {
      return (
        <div id='overview' className='container'>
          <div className='row'>
            <div className='col-12'>
              <ImageGallery toggleExpand={this.toggleExpand} />
            </div>
          </div>
          <Description id='descrip' />
        </div>
      )
    } else {
      return (
        <div id='overview' className='container'>
          <div className='row'>
            <div className='col-7'>
              <ImageGallery toggleExpand={this.toggleExpand} />
            </div>
            <div className='col-5'>
              <ProductDetail id='detail' className='col-5' />
            </div>
          </div>
          <Description id='descrip' />
        </div>
      )
    }

  }
}

export default Overview;