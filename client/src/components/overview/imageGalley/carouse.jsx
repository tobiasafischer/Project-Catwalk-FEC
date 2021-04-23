import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Carouse = (props) => {
  return (
    <div className='carousel'>
      <img className='carousel_pic' src={props.data[props.currentInd].url}></img>
      <button className={props.nextdisplay} onClick={props.goToNext}><FontAwesomeIcon icon={faChevronRight} /></button>
      <button id='previous' className={props.predisplay} onClick={props.goToPrevious}><FontAwesomeIcon icon={faChevronLeft} /></button>
    </div>
  )

}

export default Carouse;