import React, { useState, useEffect } from 'react';
import {
  Modal,
  Form,
  Col,
} from 'react-bootstrap';
import Rating from 'react-rating';
import axios from 'axios';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import ReviewForm from './form-components/review-form';

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
              <ReviewForm />
            </div>
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
