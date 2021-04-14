import React from 'react';
import Rating from 'react-rating';
import emptyStar from '../../../../../lib/assets/star-empty.png';
import fullStar from '../../../../../lib/assets/star-full.png';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stop: this.props.stop,
      step: this.props.step,
      fractions: this.props.fractions,
      initialRating: this.props.initialRating,
      readonly: this.props.readonly,
      
    };
    this.renderStars = this.renderStars.bind(this);
  }

  renderStars() {
    return (
      <div id='stars'>
        <Rating 
        stop={this.state.stop}
        step={this.state.step}
        fractions={this.state.fractions}
        initialRating={this.state.initialRating}
        readonly={this.state.readonly}
        emptySymbol={<img src={emptyStar} className="icon" />}
        fullSymbol={<img src={fullStar} className="icon" />}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="stars">
        {this.renderStars()}
      </div>
    )
  }
}

export default Stars;