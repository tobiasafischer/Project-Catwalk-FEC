import React, { useEffect, useState } from 'react';
import ImageGallery from './imageGalley/ImageGallery.jsx';
import Description from './description.jsx';
import ProductDetail from './productDetail.jsx';
import API_KEY from '../../../../config.js';
import axios from 'axios';
import Example from './example.jsx'

// export default function Overview() {
//   const [item, getItem] = useState({});
//   const [style, getStyle] = useState([]);
//   useEffect(() => {
//     handlegetItems();
//   }, [])
//   const handlegetItems = () => {
//     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
//       headers: API_KEY
//     })
//       .then(res => {
//         getItem(res.data[0])
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   return (
//     <div id='overview' className='container'>
//       <div className='row'>
//         <div className='col-12'>
//           <ImageGallery item={item} />
//         </div>
//       </div>
//       <Description id='descrip' />
//     </div>
//   )
// if (this.state.expand) {
// return (

//   )
// } else {
//   return (
//     <div id='overview' className='container'>
//       <div className='row'>
//         <div className='col-7'>
//           <ImageGallery toggleExpand={this.toggleExpand} images={this.state.styles} />
//         </div>
//         <div className='col-5'>
//           <ProductDetail id='detail' className='col-5' />
//         </div>
//       </div>
//       <Description id='descrip' />
//     </div>
//   )
// }
// }

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      item: {},
      styles: [],
      loading: true,
      currentstyle: {},
      styleId: 0
    }
    this.toggleExpand = this.toggleExpand.bind(this);
    this.handlegetItems = this.handlegetItems.bind(this);
    this.handlegetStyles = this.handlegetStyles.bind(this);
    this.handleSelector = this.handleSelector.bind(this);
  }
  toggleExpand() {
    this.setState({
      expand: !this.state.expand
    })
  }
  handlegetItems() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
      headers: API_KEY
    })
      .then(res => {
        this.setState({
          item: res.data[0]
        }, () => { this.handlegetStyles() })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handlegetStyles() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${this.state.item.id}/styles`, {
      headers: API_KEY
    })
      .then(res => {
        this.setState({
          styles: res.data.results,
          currentstyle: res.data.results[0]
        })
      })
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.handlegetItems()
    // this.handlegetStyles()
  }
  handleSelector(e) {
    this.setState({
      currentstyle: this.state.styles[e.target.id]
    }, () => console.log(e.target.id))
  }
  render() {
    if (this.state.expand && !this.state.loading) {
      return (
        <div id='overview' className='container'>
          <div className='row'>
            <div className='col-12'>
              <ImageGallery toggleExpand={this.toggleExpand} images={this.state.currentstyle.photos} />
            </div>
          </div>
          <Description id='descrip' />
        </div>
      )
    } else if (!this.state.expand && !this.state.loading) {
      return (
        <div id='overview' className='container'>
          <div className='row'>
            <div className='col-7'>
              <ImageGallery toggleExpand={this.toggleExpand} images={this.state.currentstyle.photos} />
            </div>
            <div className='col-5'>
              <ProductDetail id='detail' className='col-5' category={this.state.item.category} name={this.state.item.name} styles={this.state.styles} handleSelector={this.handleSelector.bind(this)} currentstyle={this.state.currentstyle} />
            </div>
          </div>
          <Description id='descrip' item={this.state.item} />
        </div>
      )
    } else {
      return (
        <p>Loading</p>
      )
    }

  }
}

export default Overview;