import React from 'react';
import Stars from './stars.jsx';
class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.props.stars,
      starsRounded: Math.floor(this.props.stars * 4)
    };
  }

  render() {
    return (
      <div className="review-tile">
        <h2>Review Tile</h2>
        {<Stars stop={20} step={4} fractions={4} initialRating={this.state.starsRounded} readonly={true}/>}
      </div>
      
    )
  }
}

export default ReviewTile;