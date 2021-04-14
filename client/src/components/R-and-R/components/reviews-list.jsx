import React from 'react';
import ReviewTile from './review-tile.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesDisplayed: 2,
      moreThanTwo: false,
      reviewsLeft: null,
    };
  }

  render() {
    return (
      <div className="reviews-list">
        <h2>ReviewList</h2>
        <ReviewTile stars={4.35}/>
      </div>
      
    )
  }
}

export default ReviewsList;