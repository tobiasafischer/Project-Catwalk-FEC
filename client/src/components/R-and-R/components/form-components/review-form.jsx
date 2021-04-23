import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ReviewForm = (props) => {
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

  return (
    <ValidatorForm
    >
      <h2>Simple form</h2>
      <TextValidator
        label="name"
        onChange={(e) => checkChar(e.target.value, 1000, setBody)}
        name="name"
        value={name}
        validators={['required']}
        errorMessages={['this field is required']}
      />
      <TextValidator
        label="Email"
        onChange={(e) => checkChar(e.target.value, 1000, setBody)}
        name="email"
        value={email}
        validators={['required', 'isEmail']}
        errorMessages={['this field is required', 'email is not valid']}
      />
      <br />
      <br />
    </ValidatorForm>
  );
};

export default ReviewForm;