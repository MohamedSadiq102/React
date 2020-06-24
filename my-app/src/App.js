import React, {Component} from 'react';
import Ninjas from './Ninja';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    ninjas: [
    {name : 'Sadiq', age : 23, belt : 'black'},
    {name : 'Karim', age : 27, belt : 'white'},
    {name : 'Sabri', age : 26, belt : 'green'}
    ]
  }
  render(){
  return (
    <div className="App">
    <h1>My First React App!</h1>
    <p>Sadiq</p>
    <Ninjas ninjas={this.state.ninjas}/>
  
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
