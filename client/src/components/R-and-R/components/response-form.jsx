/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Modal,
  Form,
  Col,
} from 'react-bootstrap';
import Stars from './stars';

function getDate(date) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth() + 1];
  const day = date.getDate();
  const year = date.getFullYear();
  return (`${month} ${day}, ${year}`);
}

function checkChar(str, max) {
  if (str.length === max) {

  }
}

function ResponseForm() {
  const [date] = useState(getDate(new Date()));
  const [stars, setStars] = useState(0);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState('');
  const [product] = useState('tshirtlol');
  const [show, setShow] = useState(false);
  const [canWriteBody, setCanWriteBody] = useState(false);
  const [canWriteSummary, setCanWriteSummary] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="responseForm">
      <a href="#review-button" onClick={handleShow} id="review-button">ADD A REVIEW +</a>
      <div id="review-form">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title>Write your review</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <h5>
              About the
              {` ${product}`}
            </h5>
            <div style={{ marginTop: '20px' }}>
              <Stars
                stop={20}
                step={4}
                fractions={4}
                initialRating={20}
              />
            </div>
            <Form>
              <Form.Row>
                <div style={{ marginTop: '10px' }}>
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="I recommend this item"
                  />
                </div>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Name
                    </div>
                  </Form.Label>
                  <Form.Control type="name" placeholder="First Last" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Email
                    </div>
                  </Form.Label>
                  <Form.Control type="email" placeholder="example@example.com" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridSummary">
                <Form.Label>
                  <div style={{ marginTop: '20px' }}>
                    Summary
                  </div>
                </Form.Label>
                <Form.Control placeholder="Review summary..." />
                <Form.Text id="passwordHelpBlock" muted>
                  Your summary must be 1-60 characters long.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formGridBody">
                <Form.Label>
                  <div style={{ marginTop: '20px' }}>
                    Review
                  </div>
                </Form.Label>
                <Form.Control 
                  as="textarea" 
                  placeholder="Write your review here..."
                  onChange={(e) => checkChar(e.target.value)} 
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <a href="#review-button" onClick={handleClose} id="review-button">Close</a>
            <a href="#review-button" onClick={handleClose} id="review-button">Submit Review</a>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  );
}

export default ResponseForm;
