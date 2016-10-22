import React from 'react';
import Nav from '../components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className = 'appContainer'>
        <Nav />
        <div className="childContainer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
