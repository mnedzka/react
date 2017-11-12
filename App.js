import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username: 'Michał Nędzka',    
    userInput: '',
  }

  eventHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  twoWayBinding = (e) => {
    this.setState({ userInput: e.target.value })
  }

  remove = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText});
  }

  render() {
    const CharList = this.state.userInput.split('').map( (char, index ) => {
      return <CharComponent 
      letter={char} 
      key={index}
      clicked ={() => this.remove(index)} />
    });


    const style = {
      color: 'blue',
      textTransform: 'uppercase',
      border: '1px solid red'
  }

    return (
      <div className="App">
        <h1 style={style}>Hello</h1>
        <input 
        type='text'
        onChange={this.twoWayBinding} 
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {CharList}
        {/* <UserInput changed={this.eventHandler} name={this.state.username} />
        <UserOutput  username= {this.state.username} />
        <UserInput />
        <UserOutput name='michał się uczy' /> */}
      </div>
    );
  }
}

export default App;
