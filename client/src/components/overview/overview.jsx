import React, { useEffect, useState } from 'react';
import ImageGallery from './imageGalley/ImageGallery.jsx';
import Description from './description.jsx';
import ProductDetail from './productDetail.jsx';
import API_KEY from '../../../../config.js';
import axios from 'axios';

export default function Overview(props) {
  const [expand, setExpand] = useState(false);
  const [item, setItem] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentstyle, setCurrentstyle] = useState({});
  const [styleId, setStyleId] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);
  const [predisplay, setPredisplay] = useState('button');
  const [nextdisplay, setNextdisplay] = useState('button');

  const toggleExpand = () => {
    setExpand(!expand)
  }
  const handlegetItems = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
      headers: API_KEY
    })
      .then(res => {
        setItem(res.data[0]);
        handlegetStyles(res.data[0].id)
      })
      // .then(res => {
      //   handlegetStyles(res.data[0].id)
      // })
      .catch(err => {
        console.log(err)
      })
  }
  const handlegetStyles = (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}/styles`, {
      headers: API_KEY
    })
      .then(res => {
        setCurrentstyle(res.data.results[0])
        setStyles(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => handlegetItems(), [])

  const handleSelector = ({ target }) => {
    if (currentInd < currentstyle.photos.length - 1 && currentInd > 0) {
      setPredisplay('button')
      setNextdisplay('button')
    }
    setCurrentstyle(styles[target.id])
    setCurrentInd(0);
    if (currentInd === currentstyle.photos.length - 1) {
      setNextdisplay('hidden')
    }
    if (currentInd === 0) {
      setPredisplay('hidden')
    }
  }

  if (expand && styles.length !== 0) {
    return (
      <div id='overview' className='container'>
        <div className='row'>
          <div className='col-12'>
            <ImageGallery
              currentInd={currentInd}
              setNextdisplay={setNextdisplay}
              nextdisplay={nextdisplay}
              predisplay={predisplay}
              setPredisplay={setPredisplay}
              setCurrentInd={setCurrentInd}
              toggleExpand={toggleExpand}
              images={currentstyle.photos}
            />
          </div>
        </div>
        <Description
          id='descrip'
          item={item} />
      </div>
    )

  } else if (!expand && styles.length !== 0) {
    return (
      <div id='overview' className='container'>
        <div className='row'>
          <div className='col-7'>
            <ImageGallery
              currentInd={currentInd}
              setCurrentInd={setCurrentInd}
              toggleExpand={toggleExpand}
              images={currentstyle.photos}
              setNextdisplay={setNextdisplay}
              nextdisplay={nextdisplay}
              predisplay={predisplay}
              setPredisplay={setPredisplay}
            />
          </div>
          <div className='col-5'>
            <ProductDetail
              id='detail'
              className='col-5'
              category={item.category}
              name={item.name}
              styles={styles}
              handleSelector={handleSelector}
              currentstyle={currentstyle} />
          </div>
        </div>
        <Description
          id='descrip'
          item={item} />
      </div>
    )
  } else {
    return (
      <p>Loading</p>
    )
  }


}
