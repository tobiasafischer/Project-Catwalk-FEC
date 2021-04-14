import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/R-and-R/r-and-r';

function App() {
  return (
    <div>
      <h1>This is our app</h1>
      <Review />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
