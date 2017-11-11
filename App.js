import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Michał Nędzka'
  }

  eventHandler = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    const style = {
      color: 'blue',
      textTransform: 'uppercase',
      border: '1px solid red'
  }
    return (
      <div className="App">
        <h1 style={style}>Hello</h1>
        <UserInput changed={this.eventHandler} name={this.state.username} />
        <UserOutput  username= {this.state.username} />
        <UserInput />
        <UserOutput name='michał się uczy' />
      </div>
    );
  }
}

export default App;
