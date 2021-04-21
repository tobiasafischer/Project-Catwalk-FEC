/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Card,
  Collapse,
  Button,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import Rating from 'react-rating';

function ReviewTile(props) {
  // refactor to use ref so it only rerenders on stars change --> memoize the roundStars

  function roundStars(star) {
    return Math.floor(star * 4);
  }

  function handleHelpfulClick(callback, item, clickedCb, clicked) {
    // cb, item is for the setter of the count
    // clickedCb, clicked is the setter for the boolean if clicked
    if (!clicked) {
      callback(item + 1);
      clickedCb(true);
    }
  }

  function getBodyStrings(body, size) {
    let bodyStr = body.substring(0, size);
    let newIndex = Infinity;
    const valid = [' ', '!', '.', '?'];
    for (let i = bodyStr.length; i >= 0; i -= 1) {
      if (valid.includes(bodyStr[i])) {
        newIndex = i;
        bodyStr = bodyStr.substring(0, i);
        break;
      }
    }
    const remainingStr = body.substring(newIndex);
    return [bodyStr, remainingStr];
  }

  function validateTitle(title) {
    // if title > 60 chars we need to truncate
    if (title.length > 60) {
      const [bodyStr, remainingStr] = getBodyStrings(title, 59);
      // for the first 60 chars
      const sub = (<strong>{`${bodyStr}...`}</strong>);
      // this is for the wrapped text
      const remaining = (
        <div
          style={({
            color: '#949494', fontSize: '12px', marginTop: '10px', marginBottom: '20px',
          })}
        >
          {`...${remainingStr}`}
        </div>
      );
      return [sub, remaining];
    }
    // else just return the title bolded
    return [<div><strong>{title}</strong></div>];
  }

  function validateBody(body) {
    const [open, setOpen] = useState(false);
    if (body.length >= 250) {
      const [bodyStr, remainingStr] = getBodyStrings(body, 249);
      return (
        <div>
          <div style={{ color: '#949494' }}>{ `${bodyStr}...` }</div>
          <Collapse in={open}>
            <div>
              <Card.Text id="collapse-text" style={{ color: '#949494' }}>
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
    return body;
  }

  function validateRecommend(recommend) {
    if (recommend) {
      return (
        <div id="recommends">
          <i id="recommend-icon" className="bi bi-check2" />
          <div className="ml-2">I recommend this product</div>
        </div>
      );
    }
    return <br />;
  }

  function verifiedPurchaser(verified) {
    if (verified) {
      return (
        <div id="verified-purchaser">
          <i id="verified-icon" className="bi bi-check-circle-fill" />
          <div className="ml-2">Verified Purchaser</div>
        </div>
      );
    }
    return <br />;
  }

  function validateOwnerResponse(response) {
    const res = [];
    if (response) {
      res.push(
        <div className="mt2" style={{ backgroundColor: '#ebebeb' }} id="owner-response">
          <div style={{ color: '#454545' }}><strong>Response:</strong></div>
          <div className="mt-2" style={{ fontSize: '15px' }}>{response}</div>
        </div>,
      );
    }
    return res;
  }

  function renderThumbnails(images) {
    if (images.length > 0) {
      const thumbnails = images.map((image) => (
        <div>
          <Image style={{ width: '100px', height: 'auto' }} src={image} rounded thumbnail="true" />
        </div>
      ));

      return (
        <Container style={{ height: '150px' }} className="d-inline-flex">
          {thumbnails}
        </Container>
      );
    }
  }
  const [{ stars }] = useState(props); // initial rating
  const [starsRounded] = useState(() => roundStars(stars)); // rounding to nearest .25
  // const [{ title }] = useState(props); // review card title
  // const [{ body }] = useState(props); // review card body text
  const [name] = useState('Tobias Fischer'); // name of reviewer
  const [date] = useState('January 29, 2019'); // date reviewed
  const [positiveReviews, setPositiveReviews] = useState(0); // # of positive reviews (Yes (#))
  const [reportCount, setReportCount] = useState(0); // # of reports
  const [yesDidClick, setYesDidClick] = useState(false); // if the user clicked Yes -> disable
  const [reportDidClick, setReportDidClick] = useState(false); // ^^ disable report
  const [doesRecommend] = useState(true);
  const [purchased] = useState(false);
  const [ownerResponse] = useState('aosfijaoisfjoasfasf');

  const images = [
    'blob:http://localhost:3000/3665fc09-d99a-4347-bbe5-3534c5368f21',
    'blob:http://localhost:3000/15e44ee2-2643-4320-b991-7985b0fc521c',
    'blob:http://localhost:3000/f5a66d00-8668-43fc-a0be-d3eb0fe0e6b2',
    'blob:http://localhost:3000/7fa65aed-0128-4af0-9c32-5001870d8788',
    'blob:http://localhost:3000/dd1a1bbd-f608-4e3a-a998-dde9c4fa1da1',
  ];

  const [thumbnails] = useState(renderThumbnails(images));

  // const text = 'gajsasdasdasddgopiajsdgoijsadopgijopasidgjopsidagjopsiadjgoisadjgoias...';
  const bodyText = '6ij5rt6i5rt6i5r6tik5t6i5 this is the text of my review. and this is the texthe ndthis is the text of my gdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoijsdaopvijgdsagfhadsgiopsadjvbpoisdjavbopisjdavbopijsvpoij xdtr667yikdty.';
  // const bodyText = 'ahjssajdvopjsdaviopjsdpovijsdopiavjsdpoiavjopsidvjopisdajvpoijsadopivjsdoip';
  const other = 'Helly name is tobias fischer and i am here to talk to you about this really cool review product that i have to share with you';
  return (
    <div className="review-tile">
      {/* think of this as a container with special bootstrap options */}
      <Card style={{ color: '#525252' }}>
        <div id="star" className="">
          {/* creating the star rating with a immutable review --> quarter stars */}
          <Rating
            stop={20}
            step={4}
            fractions={4}
            initialRating={starsRounded}
            readonly="true"
            quiet="false"
            emptySymbol={<i id="star-icon" className="bi bi-star" />}
            fullSymbol={<i id="star-icon" className="bi bi-star-fill" />}
          />
        </div>
        {/* this creates the username info in the top right */}
        <div id="user-container" className="d-inline-flex justify-content-end">
          {/* checks if we need to add the verified icon */}
          {/* making the name with margin spacing */}
          <div id="user-container-item" className="ml-3">{name}</div>
          ,
          {/* making the date with margin spacing */}
          <div id="user-container-item" className="ml-3">{date}</div>
          {verifiedPurchaser(purchased)}
        </div>
        {/* where we hold the meat of the review */}
        <div className="mt-3" id="review-text-container">
          {/* title of the review */}
          <Card.Title>
            {/* join me in the function above to explain */}
            {validateTitle(other)}
          </Card.Title>
          {/* body of the review */}
          { validateBody(bodyText) }
        </div>
        { validateOwnerResponse(ownerResponse) }
        { validateRecommend(doesRecommend) }
        {thumbnails}
        {/* this is for the helpful section at the bottom */}
        <div style={{ color: '#949494' }} className="d-inline-flex">
          {/* this creates the helpful text with appropriate spacing */}
          <div className="mt-2">Was this helpful?</div>
          {/* this is the link for Yes(#) */}
          <a style={{ color: '#949494' }} id="helpful-yes" className="ml-auto p-2" onClick={() => handleHelpfulClick(setPositiveReviews, positiveReviews, setYesDidClick, yesDidClick)} aria-hidden="true"><u>Yes</u></a>
          {/* this is the number for above ^ */}
          <div className="mt-2">
            (
            {positiveReviews}
            )
          </div>
          {/* same things as above but it is for reporting */}
          <div className="ml-auto p-2">|</div>
          {/* same things as above but it is for reporting */}
          <a style={{ color: '#949494' }} id="helpful-yes" className="ml-auto p-2" onClick={() => handleHelpfulClick(setReportCount, reportCount, setReportDidClick, reportDidClick)} aria-hidden="true"><u>Report</u></a>

        </div>
      </Card>
    </div>
  );
}

export default ReviewTile;
