import React, {Component} from 'react';
import Ninjas from './Ninja';
import AddNinja from './AddNinja';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    ninjas: [
    {name : 'Sadiq', age : 23, belt : 'black', id: 1},
    {name : 'Karim', age : 27, belt : 'white', id: 2},
    {name : 'Sabri', age : 26, belt : 'green', id:3}
    ]
  }

  AddNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  render(){
  return (
    <div className="App">
    <h1>My First React App!</h1>
    <p>Sadiq</p>
    <Ninjas ninjas={this.state.ninjas}/>
    <AddNinja addNinja = {this.addNinja}/>
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
