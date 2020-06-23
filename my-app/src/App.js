import React, {Component} from 'react';
import Ninjas from './Ninja';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
    <h1>My First React App!</h1>
    <p>Sadiq</p>
    <Ninjas />
   { /*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to React
        </a>
      </header> */ }
    </div>
  );
  }
}

export default App;
