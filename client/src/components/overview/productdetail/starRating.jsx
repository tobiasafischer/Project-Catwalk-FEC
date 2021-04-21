import React from 'react';
import StarRatings from 'react-star-ratings';
class Star extends React.Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={2.403}
        starDimension="1.4em"
        starSpacing=""

      />
    );
  }
}
export default Star;