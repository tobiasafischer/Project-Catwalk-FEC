import React, { useState, useEffect } from 'react';
import {
  Modal,
  Form,
  Col,
} from 'react-bootstrap';
import Rating from 'react-rating';
import axios from 'axios';
import { DropzoneAreaBase } from 'material-ui-dropzone';

const ResponseForm = (props) => {
  const [rating, setRating] = useState(20);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [{ product }] = useState(props);
  const [{ productId }] = useState(props);
  const [show, setShow] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [unformat, setUnformat] = useState([]);
  const [bodyCounter, setBodyCounter] = useState([]);

  const checkChar = (str, max, callback) => {
    callback(str.slice(0, max));
  };

  const handleSubmit = () => {
    const params = {
      product_id: productId,
      rating: rating / 4,
      summary,
      body,
      recommend: Boolean(recommend),
      name,
      email,
      photos,
      characteristics: {},
    };
    axios.post('http://localhost:3000/reviews/', params)
      .then(() => {
      })
      .catch((err) => {
        throw err;
      });
  };

  const reset = () => {
    setRating(20);
    setName('');
    setSummary('');
    setBody('');
    setEmail('');
    setRecommend(false);
    setPhotos([]);
  };

  const renderBodyCount = () => {
    if (body.length >= 50) {
      setBodyCounter('Minimum reached');
    } else {
      setBodyCounter(`Minimum required characters left: ${50 - body.length}`);
    }
  };

  useEffect(() => renderBodyCount(), [body]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="responseForm">
      <button
        type="button"
        onClick={handleShow}
        id="review-button"
      >
        ADD A REVIEW +
      </button>
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
            <Modal.Title>
              Write your review
            </Modal.Title>
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
                initialRating={rating}
                emptySymbol={(
                  <i
                    id="star-icon"
                    className="bi bi-star"
                  />
                )}
                fullSymbol={(
                  <i
                    id="star-icon"
                    className="bi bi-star-fill"
                  />
                )}
                onClick={(e) => setRating(e)}
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

                <Form.Group
                  as={Col}
                  controlId="formGridName"
                >
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Name
                    </div>
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder="jackson11!"
                    value={name}
                    onChange={(e) => checkChar(e.target.value, 60, setName)}
                    type="name"
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please input your name.
                  </Form.Control.Feedback>
                  <Form.Text id="summaryHelpBlock" muted>
                    For privacy reasons, do not use your full name or email address
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>
                    <div style={{ marginTop: '20px' }}>
                      Email
                    </div>
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder="jackson11@email.com"
                    value={email}
                    onChange={(e) => checkChar(e.target.value, 60, setEmail)}
                    type="email"
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please input your email.
                  </Form.Control.Feedback>
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
                  required
                  placeholder="Example: Best purchase ever!"
                  onChange={(e) => checkChar(e.target.value, 60, setSummary)}
                  value={summary}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please input a valid summary.
                </Form.Control.Feedback>
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
                  required
                  as="textarea"
                  placeholder="Why did you like the product or not?"
                  onChange={(e) => checkChar(e.target.value, 1000, setBody)}
                  value={body}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please input a valid review body.
                </Form.Control.Feedback>
                <Form.Text id="bodyHelpBlock" muted>
                  {bodyCounter}
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <DropzoneAreaBase
                  acceptedFiles={['image/*']}
                  filesLimit={5}
                  fileObjects={unformat}
                  onAdd={(photo) => {
                    setPhotos([].concat(photos, photo[0].data));
                    setUnformat([].concat(unformat, photo));
                  }}
                  onDelete={(photo) => setPhotos(photos.filter((item) => item.data !== photo.data))}
                  dropzoneText="Upload up to (5) images"
                  showFileNames="true"
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              onClick={handleClose}
              id="review-button"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={() => {
                handleClose();
                handleSubmit();
                reset();
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
};

export default ResponseForm;
