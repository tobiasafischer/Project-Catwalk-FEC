import React from 'react';
import Ratings from 'react-ratings-declarative';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.stars
    };
    this.renderStars = this.renderStars.bind(this);
  }

  renderStars() {
    let starsRounded = Math.floor(this.state.stars * 4) / 4; //this rounds to nearest 0.25
    return (
      <div id='stars'>
        <Ratings
          rating={starsRounded}
          widgetDimensions='20px'
          widgetSpacings='5px'
        />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </div>
    );

    
  }

  render() {
    return (
      <div className="review-tile">
        <h2>Review Tile</h2>
        {this.renderStars()}
      </div>
      
    )
  }
}

export default ReviewTile;