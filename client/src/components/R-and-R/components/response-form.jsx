/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Modal, InputGroup } from 'react-bootstrap';

function getDate(date) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth() + 1];
  const day = date.getDate();
  const year = date.getFullYear();
  return (`${month} ${day}, ${year}`);
}

function ResponseForm() {
  const [date] = useState(getDate(new Date()));
  const [stars, setStars] = useState(0);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="responseForm">
      <a href="#review-button" onClick={handleShow} id="review-button">ADD A REVIEW +</a>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title>Please enter your review:</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <a href="#review-button" onClick={handleClose} id="review-button">Close</a>
          <a href="#review-button" onClick={handleClose} id="review-button">Submit Review</a>
        </Modal.Footer>
        
      </Modal>
    </div>

  );
}

export default ResponseForm;
