import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React A pp</h1>
        <Person name="Javier" age="32" />
        <Person name="Sniffany" age="30">Love to dance</Person>
        <Person name="Martha" age="34" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi I\'m a react App '));
  }
}

export default App;