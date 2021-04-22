/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Card,
  Collapse,
  Button,
  Container,
  Image,
  Modal,
} from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewTile = (props) => {
  const [{ stars }] = useState(props); // initial rating
  // const [{ title }] = useState(props); // review card title
  // const [{ body }] = useState(props); // review card body text
  const [name] = useState('Tobias Fischer'); // name of reviewer
  const [date] = useState('January 29, 2019'); // date reviewed
  const [positiveReviews, setPositiveReviews] = useState(0); // # of positive reviews (Yes (#))
  const [yesDidClick, setYesDidClick] = useState(false); // if the user clicked Yes -> disable
  // const [reportCount, setReportCount] = useState(0); // # of reports
  // const [reportDidClick, setReportDidClick] = useState(false); // ^^ disable report
  const [doesRecommend] = useState(true);
  const [purchased] = useState(false);
  const [ownerResponse] = useState('aosfijaoisfjoasfasf');
  const [show, setShow] = useState(false);
  const images = [
    'blob:http://localhost:3000/3665fc09-d99a-4347-bbe5-3534c5368f21',
    'blob:http://localhost:3000/15e44ee2-2643-4320-b991-7985b0fc521c',
    'blob:http://localhost:3000/f5a66d00-8668-43fc-a0be-d3eb0fe0e6b2',
    'blob:http://localhost:3000/7fa65aed-0128-4af0-9c32-5001870d8788',
    'blob:http://localhost:3000/dd1a1bbd-f608-4e3a-a998-dde9c4fa1da1',
  ];
  const [thumbnailModal, setThumbnailModal] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bodyText = '6ij5rt6i5rt6i5r6tik5t6i5 this is the text of my review. and this is the texthe ndthis is the text of my gdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoij xdtr667yikdty.';
  const title = 'yo whats up pimp';
  const roundStars = (star) => Math.floor(star * 4);
  const [starsRounded] = useState(() => roundStars(stars)); // rounding to nearest .25

  const handleThumbnailClick = (image) => {
    handleShow();
    setThumbnailModal(image);
  };

  const renderThumbnails = () => {
    if (images.length > 0) {
      const thumbnails = images.map((image) => (
        <div>
          <Image
            onClick={() => handleThumbnailClick(image)}
            style={{
              width: '100px',
              height: 'auto',
            }}
            src={image}
            rounded
            thumbnail="true"
          />
        </div>
      ));

      return (
        <Container
          style={{ height: '150px' }}
          className="d-inline-flex"
        >
          {thumbnails}
        </Container>
      );
    }
    return <></>;
  };
  const [thumbnails] = useState(renderThumbnails());

  const handleHelpfulClick = () => {
    if (!yesDidClick) {
      setPositiveReviews(positiveReviews + 1);
      setYesDidClick(true);
    }
  };

  const getStrings = (text, max) => {
    let textStr = text.substring(0, max);
    let newIndex;
    const valid = [' ', '!', '.', '?'];
    for (let i = textStr.length; i >= 0; i -= 1) {
      if (valid.includes(textStr[i])) {
        newIndex = i;
        textStr = textStr.substring(0, i);
        break;
      }
    }
    const remainingStr = text.substring(newIndex);
    return [textStr, remainingStr];
  };

  const validateTitle = () => {
    if (title.length > 60) {
      const [titleStr, remainingStr] = getStrings(title, 59);
      const sub = (<strong>{`${titleStr}...`}</strong>);
      const remaining = (
        <div
          style={({
            color: '#949494',
            fontSize: '12px',
            marginTop: '10px',
            marginBottom: '20px',
          })}
        >
          {`...${remainingStr}`}
        </div>
      );
      return [sub, remaining];
    }
    return [<div><strong>{title}</strong></div>];
  };

  const validateBody = () => {
    const [open, setOpen] = useState(false);
    if (bodyText.length >= 250) {
      const [bodyStr, remainingStr] = getStrings(bodyText, 249);
      return (
        <div>
          <div style={{ color: '#949494' }}>
            { `${bodyStr}...` }
          </div>
          <Collapse in={open}>
            <div>
              <Card.Text
                id="collapse-text"
                style={{ color: '#949494' }}
              >
                { remainingStr }
              </Card.Text>
            </div>
          </Collapse>
          <Button
            block="true"
            size="sm"
            style={{ color: '#949494' }}
            variant="link"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            Show More
          </Button>
        </div>
      );
    }
    return bodyText;
  };

  const validateRecommend = () => {
    if (doesRecommend) {
      return (
        <div id="recommends">
          <i
            id="recommend-icon"
            className="bi bi-check2"
          />
          <div className="ml-2">
            I recommend this product
          </div>
        </div>
      );
    }
    return <></>;
  };

  const verifiedPurchaser = () => {
    if (purchased) {
      return (
        <div id="verified-purchaser">
          <i
            id="verified-icon"
            className="bi bi-check-circle-fill"
          />
          <div className="ml-2">
            Verified Purchaser
          </div>
        </div>
      );
    }
    return <></>;
  };

  const validateOwnerResponse = () => {
    const res = [];
    if (ownerResponse) {
      res.push(
        <div
          className="mt2"
          style={{ backgroundColor: '#ebebeb' }}
          id="owner-response"
        >
          <div style={{ color: '#454545' }}>
            <strong>Response:</strong>
          </div>
          <div
            className="mt-2"
            style={{ fontSize: '15px' }}
          >
            {ownerResponse}
          </div>
        </div>,
      );
    }
    return res;
  };

  return (
    <div className="review-tile">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div style={{ justifyContent: 'center' }}>
          <Image
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={thumbnailModal}
            rounded
            thumbnail="true"
          />
          <button
            style={{
              marginTop: '2%',
              marginLeft: '5%',
              width: '90%',
              height: 'auto',
            }}
            type="button"
            onClick={handleClose}
            id="review-button"
          >
            Close
          </button>
        </div>
      </Modal>
      <Card style={{ color: '#525252' }}>
        <div id="star">
          <Rating
            stop={20}
            step={4}
            fractions={4}
            initialRating={starsRounded}
            readonly="true"
            quiet="false"
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
          />
        </div>
        <div
          id="user-container"
          className="d-inline-flex justify-content-end"
        >
          <div
            id="user-container-item"
            className="ml-3"
          >
            {name}
          </div>
          ,
          <div
            id="user-container-item"
            className="ml-3"
          >
            {date}
          </div>
          {verifiedPurchaser()}
        </div>
        <div
          className="mt-3"
          id="review-text-container"
        >
          <Card.Title>
            {validateTitle()}
          </Card.Title>
          { validateBody() }
        </div>
        { validateOwnerResponse() }
        { validateRecommend() }
        {thumbnails}
        <div
          style={{ color: '#949494' }}
          className="d-inline-flex"
        >
          <div className="mt-2">
            Was this helpful?
          </div>
          <a
            style={{ color: '#949494' }}
            id="helpful-yes"
            className="ml-auto p-2"
            onClick={handleHelpfulClick}
            aria-hidden="true"
          >
            <u>Yes</u>
          </a>
          <div className="mt-2">
            (
            {positiveReviews}
            )
          </div>
          <div className="ml-auto p-2">
            |
          </div>
          <a
            style={{ color: '#949494' }}
            id="helpful-yes"
            className="ml-auto p-2"
            aria-hidden="true"
          >
            <u>Report</u>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ReviewTile;
