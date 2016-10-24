import React from 'react';
import NavBar from '../components/Nav';

class App extends React.Component {
  render() {
    return (
      <div className = 'appContainer'>

        <NavBar />

        <div className="childContainer">

          {this.props.children}

        </div>

      </div>
    );
  }
}

export default App;
