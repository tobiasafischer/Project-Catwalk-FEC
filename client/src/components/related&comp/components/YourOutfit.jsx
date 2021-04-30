/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const YourOutfit = (props) => {
  const [{ outfitData }] = useState(props);
  const [firstItem, setFirstItem] = useState(0);
  const secondItem = firstItem + 1;
  const thirdItem = firstItem + 2;
  const fourthItem = firstItem + 3;

  let displayArray = [
    outfitData[firstItem],
    outfitData[secondItem],
    outfitData[thirdItem],
    outfitData[fourthItem],
  ];

  if (outfitData.length >= 4) {
    displayArray = displayArray.slice(0, 4);
  } else {
    displayArray = displayArray.slice(0, outfitData.length);
  }

  const leftClick = () => {
    if (firstItem > 0) {
      setFirstItem(firstItem - 1);
    }
  };

  const rightClick = () => {
    if (fourthItem < outfitData.length - 1) setFirstItem(firstItem + 1);
  };

  return (
    <div className="yourOutfit">
      <h1>Your Outfit</h1>

      <CardDeck className="cardDeck">
        {firstItem === 0 ? (<li><span style={{ opacity: 0 }} onClick={leftClick} className="arrow arrow-left" /></li>) : (
          <li><span onClick={leftClick} className="arrow arrow-left" /></li>)}

        <Card>
          <Card.Body className="addOutfit">
            <Card.Title>Add to Outfit</Card.Title>
            <Card.Text>
              <button className="plus-button" />
            </Card.Text>
          </Card.Body>
        </Card>

        {outfitData.length === 0 ? null : (
          <div className="cardGroup">
            {displayArray.map((item) => (
              <Card key={JSON.stringify(item)}>
                <span className="close hairline" />
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <div className="card-text">{item.category}</div>
                    <div className="card-text">{item.defaultPrice}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        {fourthItem === outfitData.length - 1 ? (<li><span style={{ opacity: 0 }} onClick={rightClick} className="arrow arrow-right" /></li>) : (<li><span onClick={rightClick} className="arrow arrow-right" /></li>)}

      </CardDeck>
    </div>
  );
};

export default YourOutfit;
