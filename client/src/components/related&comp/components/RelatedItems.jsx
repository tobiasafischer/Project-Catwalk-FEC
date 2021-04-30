/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import ComparisonModal from './ComparisonModal';

function RelatedItems(props) {
  const [{ relatedData }] = useState(props);
  const [firstItem, setFirstItem] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const secondItem = firstItem + 1;
  const thirdItem = firstItem + 2;
  const fourthItem = firstItem + 3;
  const fifthItem = firstItem + 4;

  let displayArray = [
    relatedData[firstItem],
    relatedData[secondItem],
    relatedData[thirdItem],
    relatedData[fourthItem],
    relatedData[fifthItem],
  ];

  if (relatedData.length >= 5) {
    displayArray = displayArray.slice(0, 5);
  } else {
    displayArray = displayArray.slice(0, relatedData.length);
  }

  const leftClick = () => {
    if (firstItem > 0) {
      setFirstItem(firstItem - 1);
    }
  };

  const rightClick = () => {
    if (fifthItem <= relatedData.length) {
      setFirstItem(firstItem + 1);
    }
  };

  return (
    <div className="relatedItems">
      <h1>Related Items</h1>

      <CardDeck className="cardDeck">
        {firstItem === 0 ? (
          <li>
            <span
              style={{ opacity: 0 }}
              className="arrow arrow-left"
            />
          </li>
        )
          : (
            <li>
              <span
                onClick={leftClick}
                className="arrow arrow-left"
              />
            </li>
          )}
        <div className="cardGroup">
          {displayArray.map((id) => (
            <Card key={id}>
              <div className="rating">
                <span onClick={() => setModalShow(true)} className="btn">☆</span>
              </div>
              <Card.Img variant="top" src={id.img} />
              <Card.Body>
                <Card.Title>{id.name}</Card.Title>
                <Card.Text>
                  <div>
                    <p className="card-text">{id.category}</p>
                    <p className="card-text">{id.defaultPrice}</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <ComparisonModal show={modalShow} onHide={() => setModalShow(false)} />

        {fifthItem === relatedData.length - 1 ? (<li><span style={{ opacity: 0 }} className="arrow arrow-right" /></li>) : (
          <li><span onClick={rightClick} className="arrow arrow-right" /></li>)}

      </CardDeck>
    </div>
  );
}

export default RelatedItems;
