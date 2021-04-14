import React from 'react';
import Rating from 'react-rating';
import emptyStar from '../../../../../lib/assets/star-empty.png';
import fullStar from '../../../../../lib/assets/star-empty.png';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.stars
    };
    this.renderStars = this.renderStars.bind(this);
  }

  renderStars() {
    let starsRounded = Math.floor(this.state.stars * 4); //this rounds to nearest 0.25
    return (
      <div id='stars'>
        <Rating 
        stop='20'
        step='4'
        fractions='4'
        initialRating={starsRounded}
        readonly={true}
        emptySymbol={<img src={emptyStar} className="icon" />}
        fullSymbol={<img src={fullStar} className="icon" />}
        />
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