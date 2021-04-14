import React from 'react';
import ReactDOM from 'react-dom';
import Review from '../../client/src/components/R-and-R/r-and-r.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <h1>This is our app</h1>
        <Review />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);