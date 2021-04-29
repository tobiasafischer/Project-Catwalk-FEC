import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/R-and-R/r-and-r';
import Overview from './components/overview/overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <h1>This is our app</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  <Overview />,
  <Review />,
  document.getElementById('app'),
);
