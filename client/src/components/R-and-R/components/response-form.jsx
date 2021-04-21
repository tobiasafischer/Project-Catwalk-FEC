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
import Rating from 'react-rating';
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
  const data = {
    stars,
    recommend,
    name,
    email,
    summary,
    body,
    images,
  };
  console.log(data);
}

// eslint-disable-next-line max-len
function reset(setStars, setName, setSummary, setBody, setEmail, setRecommend, setImages, setThumbnails) {
  setStars(20);
  setName('');
  setSummary('');
  setBody('');
  setEmail('');
  setRecommend(false);
  setImages([]);
  setThumbnails([]);
}

function renderBodyCount(body, cb) {
  if (body.length >= 50) {
    cb('Minimum reached');
  } else {
    cb(`Minimum required characters left: ${50 - body.length}`);
  }
}

function ResponseForm() {
  const [date] = useState(getDate(new Date()));
  const [stars, setStars] = useState(20);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [product] = useState('tshirtlol');
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [bodyCounter, setBodyCounter] = useState([]);
  useEffect(() => renderBodyCount(body, setBodyCounter), [body]);
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
              <Rating
                start={0}
                stop={20}
                step={4}
                fractions={4}
                initialRating={stars}
                emptySymbol={<i id="star-icon" className="bi bi-star" />}
                fullSymbol={<i id="star-icon" className="bi bi-star-fill" />}
                onClick={(e) => setStars(e)}
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
                    onChange={() => setRecommend(!recommend)}
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
                  <Form.Control
                    placeholder="jackson11!"
                    value={name}
                    onChange={(e) => checkChar(e.target.value, 60, setName)}
                    type="name"
                  />
                  <Form.Text id="summaryHelpBlock" muted>
                    For privacy reasons, do not use your full name or email address
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Email
                    </div>
                  </Form.Label>
                  <Form.Control
                    placeholder="jackson11@email.com"
                    value={email}
                    onChange={(e) => checkChar(e.target.value, 60, setEmail)}
                    type="email"
                  />
                  <Form.Text id="summaryHelpBlock" muted>
                    For authentication reasons, you will not be emailed
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridSummary">
                <Form.Label>
                  <div style={{ marginTop: '20px' }}>
                    Summary
                  </div>
                </Form.Label>
                <Form.Control
                  placeholder="Example: Best purchase ever!"
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
                  placeholder="Why did you like the product or not?"
                  onChange={(e) => checkChar(e.target.value, 1000, setBody)}
                  value={body}
                />
                <Form.Text id="bodyHelpBlock" muted>
                  {bodyCounter}
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
            <button
              type="submit"
              onClick={() => {
                handleClose();
                handleSubmit(stars, name, summary, body, email, recommend, images);
                // eslint-disable-next-line max-len
                reset(setStars, setName, setSummary, setBody, setEmail, setRecommend, setImages, setThumbnails);
              }}
              id="review-button"
            >
              Submit Review
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  );
}

export default ResponseForm;
