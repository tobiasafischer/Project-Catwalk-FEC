/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Form,
  Col,
  Image,
  Row,
  Container,
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

function checkChar(str, max, callback) {
  callback(str.slice(0, max));
}

function checkFiles(images, files) {
  for (let i = 0; i < files.length; i += 1) {
    if (images.includes(files[i])) {
      files.slice(i, 1);
    }
  }
  return files;
}

function formatThumbnail(image) {
  return (
    <Col id="thumbnail-col-container" xs={3} md={2}>
      <Image style={{ width: '175px', height: 'auto' }} src={image} rounded />
    </Col>
  );
}

function renderThumbnails(images, thumbnailCb) {
  const arr = [];
  images.forEach((image) => {
    arr.push(formatThumbnail(image));
  });
  thumbnailCb(arr);
}

function handleChange(event, images, imageCb) {
  if (images.length < 5) {
    let arrOfImages = [];
    for (let i = 0; i < event.target.files.length; i += 1) {
      arrOfImages.push(URL.createObjectURL(event.target.files[i]));
    }
    arrOfImages = checkFiles(images, arrOfImages);
    imageCb(images.concat(arrOfImages));
  }
}

function handleSubmit(stars, name, summary, body, email, recommend, images) {
  console.log(stars, name, email, recommend);
}

function handleOnChangeInfo(info, cb) {
  cb(info);
}

function ResponseForm() {
  const [date] = useState(getDate(new Date()));
  const [stars, setStars] = useState(0);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [product] = useState('tshirtlol');
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => renderThumbnails(images, setThumbnails), [images]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="responseForm">
      <button type="button" onClick={handleShow} id="review-button">ADD A REVIEW +</button>
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
                    value={recommend}
                    onChange={() => handleOnChangeInfo(!recommend, setRecommend)}
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
                  <Form.Control value={name} onChange={(e) => handleOnChangeInfo(e.target.value, setName)} type="name" placeholder="tobiasaf" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Email
                    </div>
                  </Form.Label>
                  <Form.Control value={email} onChange={(e) => handleOnChangeInfo(e.target.value, setEmail)} type="email" placeholder="example@example.com" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridSummary">
                <Form.Label>
                  <div style={{ marginTop: '20px' }}>
                    Summary
                  </div>
                </Form.Label>
                <Form.Control
                  placeholder="Review summary..."
                  onChange={(e) => checkChar(e.target.value, 60, setSummary)}
                  value={summary}
                />
                <Form.Text id="summaryHelpBlock" muted>
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
                  onChange={(e) => checkChar(e.target.value, 1000, setBody)}
                  value={body}
                />
                <Form.Text id="bodyHelpBlock" muted>
                  Your review must be 50-1000 characters long.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <div style={{ marginTop: '20px' }}>
                    Upload up to (5) images
                  </div>
                </Form.Label>
                <Container id="thumbnail-container" className="d-inline-flex justify-content-end">
                  <Row>
                    {thumbnails}
                  </Row>
                </Container>
                <Form.File
                  id="imageFileUpload"
                  onChange={(e) => {
                    handleChange(e, images, setImages);
                  }}
                  multiple
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" onClick={handleClose} id="review-button">Close</button>
            <button type="submit" onClick={() => handleSubmit(stars, name, summary, body, email, recommend, images)} id="review-button">Submit Review</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  );
}

export default ResponseForm;
