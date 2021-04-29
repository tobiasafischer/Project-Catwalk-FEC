import React from 'react';
import ReactDOM from 'react-dom';
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
<<<<<<< HEAD
  <App />,
=======
  <Overview />,
>>>>>>> da9fcbbefdfae5bc9599ae6474c418c4f7eecf66
  document.getElementById('app')
);

