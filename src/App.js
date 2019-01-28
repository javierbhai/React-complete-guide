import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Javier', age: 33 },
      { name: 'Sniffany', age: 28 },
      { name: 'Martha', age: 34 }
    ]
  }

  switchNameHandler = () => {
    console.log('it wass click');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React A pp</h1>
        <button onClick={this.switchNameHandler} > Switch ames</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Love to dance</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi I\'m a react App '));
  }
}

export default App;