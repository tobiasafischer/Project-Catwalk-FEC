/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import Carouse from './carouse';
import ThumbnailPic from './thubnailpic';

const ImageGallery = (props) => {
  const [{ images }] = useState(props);
  const [{ currentInd }] = useState(props);
  const [{ setNextdisplay }] = useState(props);
  const [{ setPredisplay }] = useState(props);
  const [{ setCurrentInd }] = useState(props);
  const [{ predisplay }] = useState(props);
  const [{ nextDisplay }] = useState(props);
  const [{ expand }] = useState(props);
  const [{ toggleExpand }] = useState(props);
  const handlechange = () => {
    if (currentInd === images.length - 1) {
      setNextdisplay('hidden');
    }
    if (currentInd === 0) {
      setPredisplay('hidden');
    }
  };

  useEffect(() => handlechange());

  const goToNext = () => {
    if (currentInd < images.length - 1) {
      setCurrentInd(() => currentInd + 1);
      setPredisplay('button');
      if (currentInd === images.length - 1) {
        setNextdisplay('hidden');
      }
    }
  };

  const goToPrevious = () => {
    if (currentInd > 0) {
      setCurrentInd(() => currentInd - 1);
      setNextdisplay('button');
      if (currentInd === 0) {
        setPredisplay('hidden');
      }
    }
  };

  const handleClick = ({ target }) => {
    setCurrentInd(Number(target.id));

    if (Number(target.id) < images.length - 1) {
      setNextdisplay('button');
    } else {
      setNextdisplay('hidden');
    }

    if (Number(target.id) > 0) {
      setPredisplay('button');
    } else {
      setPredisplay('hidden');
    }
  };
  return (
    <div id="img" className="container">
      <Carouse
        key={JSON.stringify(images)}
        data={images}
        currentInd={currentInd}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        predisplay={predisplay}
        nextdisplay={nextDisplay}
      />
      <ThumbnailPic
        currentInd={currentInd}
        data={images}
        handleClick={handleClick}
        expand={expand}
      />
      <button
        type="button"
        className="expand"
        onClick={toggleExpand}
      >
        <FontAwesomeIcon icon={faExpand} />
      </button>
    </div>
  );
};

export default ImageGallery;
