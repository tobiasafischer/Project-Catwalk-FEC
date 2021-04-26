import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Form,
  Col,
} from 'react-bootstrap';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import axios from 'axios';
import ReviewTile from './review-tile';

const ReviewForm = (props) => {
  const [rating, setRating] = useState(20);
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [{ productId }] = useState(props);
  const [photos, setPhotos] = useState([]);
  const [formattedPhotos, setFormattedPhotos] = useState([]);
  const [bodyCounter, setBodyCounter] = useState([]);
  const [errors, setErrors] = useState({});
  const [{ handleClose }] = useState(props);

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const findFormErrors = () => {
    const newErrors = {};

    if (!name || name === '') newErrors.name = 'invalid name!';
    if (!email || !validateEmail()) newErrors.email = 'invalid email!';
    if (!summary || summary === '' || summary.length > 60) newErrors.summary = 'invalid summary!';
    if (!body || body === '' || body.length < 49) newErrors.body = 'invalid body!';
    return newErrors;
  };

  const checkError = (field) => {
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
      const newErrors = findFormErrors();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      }
    }
  };
  const checkChar = (str, max, callback, field) => {
    callback(str.slice(0, max));
    checkError(field);
  };

  const reset = () => {
    setRating(20);
    setName('');
    setSummary('');
    setBody('');
    setEmail('');
    setRecommend(false);
    setPhotos([]);
    setFormattedPhotos([]);
  };

  const getDate = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const month = monthNames[date.getMonth() + 1];
    const day = date.getDate();
    const year = date.getFullYear();
    return (`${month} ${day}, ${year}`);
  };

  const renderNewTile = () => {
    ReactDOM.render(
      <ReviewTile
        key={Math.random().toString(36).substr(2, 9)}
        body={body}
        date={getDate(new Date())}
        helpfulness={0}
        photos={formattedPhotos}
        rating={rating}
        recommended={recommend}
        reviewerName={name}
        summary={summary}
        yesClicked={false}
      />,
      document.getElementById('new-review-div'),
    );
  };
  const submitData = () => {
    const params = {
      product_id: productId,
      rating: rating / 4,
      summary,
      body,
      recommend: Boolean(recommend),
      name,
      email,
      formattedPhotos,
      characteristics: {},
    };

    renderNewTile();
    axios.post('http://localhost:3000/reviews/', params)
      .then(() => {
        reset();
      })
      .catch((err) => {
        throw err;
      });
  };

  const renderBodyCount = () => {
    if (body.length >= 50) {
      setBodyCounter('Minimum reached');
    } else {
      setBodyCounter(`Minimum required characters left: ${50 - body.length}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      submitData();
    }
  };

  useEffect(() => renderBodyCount(), [body]);

  return (
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
            placeholder="jackson11!"
            value={name}
            onChange={(e) => checkChar(e.target.value, 60, setName, 'name')}
            type="name"
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
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
            placeholder="jackson11@email.com"
            value={email}
            onChange={(e) => checkChar(e.target.value, 60, setEmail, 'email')}
            type="email"
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
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
          placeholder="Example: Best purchase ever!"
          onChange={(e) => checkChar(e.target.value, 60, setSummary, 'summary')}
          value={summary}
          isInvalid={!!errors.summary}
        />
        <Form.Control.Feedback type="invalid">
          {errors.summary}
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
          as="textarea"
          placeholder="Why did you like the product or not?"
          onChange={(e) => checkChar(e.target.value, 1000, setBody, 'body')}
          value={body}
          isInvalid={!!errors.body}
        />
        <Form.Control.Feedback type="invalid">
          {errors.body}
        </Form.Control.Feedback>
        <Form.Text id="bodyHelpBlock" muted>
          {bodyCounter}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <DropzoneAreaBase
          acceptedFiles={['image/*']}
          filesLimit={5}
          fileObjects={photos}
          onAdd={(photo) => {
            setPhotos(photo);
            setFormattedPhotos(photo.map((img) => ({
              id: Math.random().toString(36).substr(2, 9),
              url: URL.createObjectURL(img.file),
            })));
          }}
          onDelete={(photo) => {
            setPhotos(photos.filter((item) => item.data !== photo.data));
          }}
          dropzoneText="Upload up to (5) images"
          showFileNames
        />
      </Form.Group>
      <button
        type="button"
        id="review-button"
        onClick={handleClose}
      >
        Close
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        id="review-button"
      >
        Submit Review
      </button>
    </Form>
  );
};

export default ReviewForm;
