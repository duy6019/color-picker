import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://facebook.com/duy.15.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            My profile
          </a>
        </header>
      </div>
    );
  }
}

export default App;
