import React from 'react';
import ReviewsList from '/home/tobias/Documents/HackReactor/Project-Catwalk-FEC/client/src/components/R-and-R/components/reviews-list.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="review">
        <p>RATINGS & REVIEWS</p>
        <ReviewsList />
      </div>
      
    )
  }
}

export default Review;