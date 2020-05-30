import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Thomas', age: 28 },
      { id: '2', name: 'Rachel', age: 29 },
      { id: '3', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  };

  nameChangeHandler = (event, index) => {
    const persons = this.state.persons.slice();
    persons[index].name = event.target.value;
    this.setState({ persons: persons }); 
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.showPersons}
          clickBtn={() => this.togglePersonsHandler()}
        />
        {persons}
      </div>
    );
  }
}

export default App;
