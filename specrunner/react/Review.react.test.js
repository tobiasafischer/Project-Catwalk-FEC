import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ReviewTile from '../../client/src/components/R-and-R/components/review-tile';
import ReviewList from '../../client/src/components/R-and-R/components/reviews-list';
import Review from '../../client/src/components/R-and-R/r-and-r';

test('Review renders', () => {
  const { getByText } = render(<Review />);
  const root = document.createElement('div');
  ReactDOM.render(<Review />, root);
  getByText('RATINGS & REVIEWS');
});

test('ReviewList renders tiles', () => {
  const { getByText, container } = render(<ReviewList stars={[{ stars: 3}, {stars: 4}]}/>);

  expect(container.childNodes.length).toBe(true);
});
